"use client"

import { useEffect, useRef, useState } from "react"
import * as d3 from "d3"

const WEST_AFRICA: [number, number] = [-14.5, 14.7]
const KARACHI: [number, number] = [67.0, 24.9]

const CENTER_LNG = (WEST_AFRICA[0] + KARACHI[0]) / 2
const CENTER_LAT = (WEST_AFRICA[1] + KARACHI[1]) / 2

interface RotatingEarthProps {
  className?: string
}

export default function RotatingEarth({ className = "" }: RotatingEarthProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!canvasRef.current || !wrapperRef.current) return

    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    if (!context) return

    // Measure the actual container width so we fill whatever column we're placed in
    const containerWidth = wrapperRef.current.clientWidth || 400
    const containerHeight = Math.round(containerWidth * 0.9)
    const baseRadius = Math.min(containerWidth, containerHeight) / 2.5

    const dpr = window.devicePixelRatio || 1
    canvas.width = containerWidth * dpr
    canvas.height = containerHeight * dpr
    canvas.style.width = `${containerWidth}px`
    canvas.style.height = `${containerHeight}px`
    context.scale(dpr, dpr)

    // Reduced from 2.2 to 1.65 for a more zoomed-out view that still frames both markers nicely
    const zoomedRadius = baseRadius * 1.25

    const projection = d3
      .geoOrthographic()
      .scale(zoomedRadius)
      .translate([containerWidth / 2, containerHeight / 2])
      .clipAngle(90)
      .rotate([-CENTER_LNG, -CENTER_LAT + 5])

    const path = d3.geoPath().projection(projection).context(context)

    const pointInPolygon = (point: [number, number], polygon: number[][]): boolean => {
      const [x, y] = point
      let inside = false
      for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const [xi, yi] = polygon[i]
        const [xj, yj] = polygon[j]
        if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
          inside = !inside
        }
      }
      return inside
    }

    const pointInFeature = (point: [number, number], feature: any): boolean => {
      const geometry = feature.geometry
      if (geometry.type === "Polygon") {
        const coordinates = geometry.coordinates
        if (!pointInPolygon(point, coordinates[0])) return false
        for (let i = 1; i < coordinates.length; i++) {
          if (pointInPolygon(point, coordinates[i])) return false
        }
        return true
      }
      if (geometry.type === "MultiPolygon") {
        for (const polygon of geometry.coordinates) {
          if (pointInPolygon(point, polygon[0])) {
            let inHole = false
            for (let i = 1; i < polygon.length; i++) {
              if (pointInPolygon(point, polygon[i])) {
                inHole = true
                break
              }
            }
            if (!inHole) return true
          }
        }
        return false
      }
      return false
    }

    const generateDotsInPolygon = (feature: any, dotSpacing = 16) => {
      const dots: [number, number][] = []
      const bounds = d3.geoBounds(feature)
      const [[minLng, minLat], [maxLng, maxLat]] = bounds
      const stepSize = dotSpacing * 0.08
      for (let lng = minLng; lng <= maxLng; lng += stepSize) {
        for (let lat = minLat; lat <= maxLat; lat += stepSize) {
          const point: [number, number] = [lng, lat]
          if (pointInFeature(point, feature)) {
            dots.push(point)
          }
        }
      }
      return dots
    }

    interface DotData {
      lng: number
      lat: number
    }

    const allDots: DotData[] = []
    let landFeatures: any

    const generateArcPoints = (
      start: [number, number],
      end: [number, number],
      numPoints = 100
    ): [number, number][] => {
      const interpolate = d3.geoInterpolate(start, end)
      const points: [number, number][] = []
      for (let i = 0; i <= numPoints; i++) {
        const t = i / numPoints
        const point = interpolate(t)
        points.push(point as [number, number])
      }
      return points
    }

    const arcPoints = generateArcPoints(WEST_AFRICA, KARACHI, 120)

    let animTime = 0
    let arcProgress = 0
    let markerScale = 0

    const easeOutElastic = (t: number): number => {
      if (t === 0 || t === 1) return t
      return Math.pow(2, -10 * t) * Math.sin((t - 0.075) * ((2 * Math.PI) / 0.3)) + 1
    }

    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
    }

    const render = () => {
      context.clearRect(0, 0, containerWidth, containerHeight)

      const currentScale = projection.scale()
      const scaleFactor = currentScale / baseRadius

      // Ocean
      context.beginPath()
      context.arc(containerWidth / 2, containerHeight / 2, currentScale, 0, 2 * Math.PI)
      context.fillStyle = "#05080f"
      context.fill()

      // Globe glow
      const glowGradient = context.createRadialGradient(
        containerWidth / 2,
        containerHeight / 2,
        currentScale * 0.95,
        containerWidth / 2,
        containerHeight / 2,
        currentScale * 1.08
      )
      glowGradient.addColorStop(0, "rgba(59, 130, 246, 0.08)")
      glowGradient.addColorStop(0.5, "rgba(59, 130, 246, 0.03)")
      glowGradient.addColorStop(1, "rgba(59, 130, 246, 0)")
      context.beginPath()
      context.arc(containerWidth / 2, containerHeight / 2, currentScale * 1.08, 0, 2 * Math.PI)
      context.fillStyle = glowGradient
      context.fill()

      // Border
      context.beginPath()
      context.arc(containerWidth / 2, containerHeight / 2, currentScale, 0, 2 * Math.PI)
      context.strokeStyle = "rgba(255,255,255,0.15)"
      context.lineWidth = 1.5
      context.stroke()

      if (landFeatures) {
        // Graticule
        const graticule = d3.geoGraticule()
        context.beginPath()
        path(graticule())
        context.strokeStyle = "rgba(255,255,255,0.06)"
        context.lineWidth = 0.8 * scaleFactor
        context.stroke()

        // Land outlines
        context.beginPath()
        for (const feature of landFeatures.features) {
          path(feature)
        }
        context.strokeStyle = "rgba(255,255,255,0.25)"
        context.lineWidth = 1 * scaleFactor
        context.stroke()

        // Halftone dots
        for (const dot of allDots) {
          const projected = projection([dot.lng, dot.lat])
          if (
            projected &&
            projected[0] >= 0 &&
            projected[0] <= containerWidth &&
            projected[1] >= 0 &&
            projected[1] <= containerHeight
          ) {
            context.beginPath()
            context.arc(projected[0], projected[1], 1.2 * scaleFactor, 0, 2 * Math.PI)
            context.fillStyle = "rgba(150,160,180,0.5)"
            context.fill()
          }
        }

        // ===== ARC =====
        if (arcProgress > 0) {
          const visibleCount = Math.floor(arcProgress * arcPoints.length)
          const visibleArc = arcPoints.slice(0, visibleCount)

          const projectedArc: [number, number][] = []
          for (const pt of visibleArc) {
            const p = projection(pt)
            if (p) projectedArc.push([p[0], p[1]])
          }

          if (projectedArc.length > 1) {
            // Glow
            context.beginPath()
            context.moveTo(projectedArc[0][0], projectedArc[0][1])
            for (let i = 1; i < projectedArc.length; i++) {
              context.lineTo(projectedArc[i][0], projectedArc[i][1])
            }
            context.strokeStyle = "rgba(59, 130, 246, 0.3)"
            context.lineWidth = 6 * scaleFactor
            context.lineCap = "round"
            context.lineJoin = "round"
            context.stroke()

            // Main line
            context.beginPath()
            context.moveTo(projectedArc[0][0], projectedArc[0][1])
            for (let i = 1; i < projectedArc.length; i++) {
              context.lineTo(projectedArc[i][0], projectedArc[i][1])
            }
            context.strokeStyle = "rgba(59, 130, 246, 0.9)"
            context.lineWidth = 2.5 * scaleFactor
            context.lineCap = "round"
            context.lineJoin = "round"
            context.stroke()
          }

          // Traveling dot (Karachi -> West Africa)
          if (arcProgress >= 1) {
            const travelT = (animTime * 0.3) % 1
            const travelIdx = arcPoints.length - 1 - Math.floor(travelT * (arcPoints.length - 1))
            const travelPt = projection(arcPoints[travelIdx])
            if (travelPt) {
              const travelGlow = context.createRadialGradient(
                travelPt[0],
                travelPt[1],
                0,
                travelPt[0],
                travelPt[1],
                12 * scaleFactor
              )
              travelGlow.addColorStop(0, "rgba(59, 130, 246, 0.6)")
              travelGlow.addColorStop(1, "rgba(59, 130, 246, 0)")
              context.beginPath()
              context.arc(travelPt[0], travelPt[1], 12 * scaleFactor, 0, 2 * Math.PI)
              context.fillStyle = travelGlow
              context.fill()

              context.beginPath()
              context.arc(travelPt[0], travelPt[1], 3.5 * scaleFactor, 0, 2 * Math.PI)
              context.fillStyle = "#ffffff"
              context.fill()
            }
          }
        }

        // ===== MARKERS =====
        if (markerScale > 0) {
          const markers: { coords: [number, number]; label: string }[] = [
            { coords: WEST_AFRICA, label: "West Africa" },
            { coords: KARACHI, label: "Karachi" },
          ]

          for (const marker of markers) {
            const p = projection(marker.coords)
            if (!p) continue

            const x = p[0]
            const y = p[1]
            const s = markerScale
            const pulse = 0.5 + 0.5 * Math.sin(animTime * 3)

            // Outer pulsing ring
            const outerRadius = (18 + pulse * 10) * scaleFactor * s
            const ringGradient = context.createRadialGradient(x, y, 0, x, y, outerRadius)
            ringGradient.addColorStop(0, "rgba(59, 130, 246, 0.0)")
            ringGradient.addColorStop(0.5, "rgba(59, 130, 246, 0.0)")
            ringGradient.addColorStop(0.7, `rgba(59, 130, 246, ${0.15 * (1 - pulse)})`)
            ringGradient.addColorStop(1, "rgba(59, 130, 246, 0)")
            context.beginPath()
            context.arc(x, y, outerRadius, 0, 2 * Math.PI)
            context.fillStyle = ringGradient
            context.fill()

            // Second pulse ring
            const pulse2 = 0.5 + 0.5 * Math.sin(animTime * 3 + 1.5)
            const outerRadius2 = (12 + pulse2 * 8) * scaleFactor * s
            context.beginPath()
            context.arc(x, y, outerRadius2, 0, 2 * Math.PI)
            context.strokeStyle = `rgba(59, 130, 246, ${0.25 * (1 - pulse2)})`
            context.lineWidth = 1.5 * scaleFactor
            context.stroke()

            // Inner glow
            const innerGlow = context.createRadialGradient(x, y, 0, x, y, 10 * scaleFactor * s)
            innerGlow.addColorStop(0, "rgba(59, 130, 246, 0.5)")
            innerGlow.addColorStop(1, "rgba(59, 130, 246, 0)")
            context.beginPath()
            context.arc(x, y, 10 * scaleFactor * s, 0, 2 * Math.PI)
            context.fillStyle = innerGlow
            context.fill()

            // Core dot
            context.beginPath()
            context.arc(x, y, 4.5 * scaleFactor * s, 0, 2 * Math.PI)
            context.fillStyle = "#3b82f6"
            context.fill()

            // Bright center
            context.beginPath()
            context.arc(x, y, 2 * scaleFactor * s, 0, 2 * Math.PI)
            context.fillStyle = "#ffffff"
            context.fill()

            // Label
            context.font = `${Math.round(10 * scaleFactor * s)}px 'Inter', system-ui, sans-serif`
            context.textAlign = "center"
            context.textBaseline = "top"

            const textWidth = context.measureText(marker.label).width
            const labelX = x
            const labelY = y + 16 * scaleFactor * s
            const padding = 6 * scaleFactor
            context.fillStyle = "rgba(0, 0, 0, 0.7)"
            context.beginPath()
            const rx = labelX - textWidth / 2 - padding
            const ry = labelY - 2 * scaleFactor
            const rw = textWidth + padding * 2
            const rh = 16 * scaleFactor * s + 4 * scaleFactor
            const cr = 4 * scaleFactor
            context.moveTo(rx + cr, ry)
            context.lineTo(rx + rw - cr, ry)
            context.quadraticCurveTo(rx + rw, ry, rx + rw, ry + cr)
            context.lineTo(rx + rw, ry + rh - cr)
            context.quadraticCurveTo(rx + rw, ry + rh, rx + rw - cr, ry + rh)
            context.lineTo(rx + cr, ry + rh)
            context.quadraticCurveTo(rx, ry + rh, rx, ry + rh - cr)
            context.lineTo(rx, ry + cr)
            context.quadraticCurveTo(rx, ry, rx + cr, ry)
            context.closePath()
            context.fill()

            context.fillStyle = "#ffffff"
            context.fillText(marker.label, labelX, labelY)
          }
        }
      }
    }

    const loadWorldData = async () => {
      try {
        setIsLoading(true)

        const response = await fetch(
          "https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/110m/physical/ne_110m_land.json"
        )
        if (!response.ok) throw new Error("Failed to load land data")

        landFeatures = await response.json()

        for (const feature of landFeatures.features) {
          const dots = generateDotsInPolygon(feature, 16)
          for (const [lng, lat] of dots) {
            allDots.push({ lng, lat })
          }
        }

        setIsLoading(false)
        startAnimation()
      } catch {
        setError("Failed to load land map data")
        setIsLoading(false)
      }
    }

    let animFrameId: number

    const startAnimation = () => {
      const startTime = performance.now()

      const animate = (now: number) => {
        const elapsed = (now - startTime) / 1000
        animTime = elapsed

        if (elapsed < 0.8) {
          markerScale = easeOutElastic(Math.min(elapsed / 0.8, 1))
        } else {
          markerScale = 1
        }

        if (elapsed > 0.5) {
          const arcElapsed = Math.min((elapsed - 0.5) / 2.0, 1)
          arcProgress = easeInOutCubic(arcElapsed)
        }

        render()
        animFrameId = requestAnimationFrame(animate)
      }

      animFrameId = requestAnimationFrame(animate)
    }

    loadWorldData()

    return () => {
      if (animFrameId) cancelAnimationFrame(animFrameId)
    }
  }, [])

  if (error) {
    return (
      <div className={`flex items-center justify-center rounded-2xl p-8 ${className}`}>
        <div className="text-center">
          <p className="font-semibold mb-2" style={{ color: "#ef4444" }}>
            Error loading Earth visualization
          </p>
          <p className="text-sm" style={{ color: "#9ca3af" }}>
            {error}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div ref={wrapperRef} className={`relative w-full ${className}`}>
      <canvas ref={canvasRef} className="block w-full h-auto" style={{ background: "transparent" }} />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-sm animate-pulse" style={{ color: "#9ca3af" }}>
            Loading globe...
          </div>
        </div>
      )}
    </div>
  )
}
