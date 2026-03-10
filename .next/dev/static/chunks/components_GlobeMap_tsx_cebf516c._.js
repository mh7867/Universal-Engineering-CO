(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/GlobeMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RotatingEarth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/src/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$geo$2f$src$2f$projection$2f$orthographic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__geoOrthographic$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-geo/src/projection/orthographic.js [app-client] (ecmascript) <export default as geoOrthographic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$geo$2f$src$2f$path$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__geoPath$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-geo/src/path/index.js [app-client] (ecmascript) <export default as geoPath>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$geo$2f$src$2f$bounds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__geoBounds$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-geo/src/bounds.js [app-client] (ecmascript) <export default as geoBounds>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$geo$2f$src$2f$interpolate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__geoInterpolate$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-geo/src/interpolate.js [app-client] (ecmascript) <export default as geoInterpolate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$geo$2f$src$2f$graticule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__geoGraticule$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-geo/src/graticule.js [app-client] (ecmascript) <export default as geoGraticule>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const WEST_AFRICA = [
    -14.5,
    14.7
];
const KARACHI = [
    67.0,
    24.9
];
const CENTER_LNG = (WEST_AFRICA[0] + KARACHI[0]) / 2;
const CENTER_LAT = (WEST_AFRICA[1] + KARACHI[1]) / 2;
function RotatingEarth({ className = "" }) {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RotatingEarth.useEffect": ()=>{
            if (!canvasRef.current || !wrapperRef.current) return;
            const canvas = canvasRef.current;
            const context = canvas.getContext("2d");
            if (!context) return;
            // Measure the actual container width so we fill whatever column we're placed in
            const containerWidth = wrapperRef.current.clientWidth || 400;
            const containerHeight = Math.round(containerWidth * 0.9);
            const baseRadius = Math.min(containerWidth, containerHeight) / 2.5;
            const dpr = window.devicePixelRatio || 1;
            canvas.width = containerWidth * dpr;
            canvas.height = containerHeight * dpr;
            canvas.style.width = `${containerWidth}px`;
            canvas.style.height = `${containerHeight}px`;
            context.scale(dpr, dpr);
            // Reduced from 2.2 to 1.65 for a more zoomed-out view that still frames both markers nicely
            const zoomedRadius = baseRadius * 1.25;
            const projection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$geo$2f$src$2f$projection$2f$orthographic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__geoOrthographic$3e$__["geoOrthographic"]().scale(zoomedRadius).translate([
                containerWidth / 2,
                containerHeight / 2
            ]).clipAngle(90).rotate([
                -CENTER_LNG,
                -CENTER_LAT + 5
            ]);
            const path = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$geo$2f$src$2f$path$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__geoPath$3e$__["geoPath"]().projection(projection).context(context);
            const pointInPolygon = {
                "RotatingEarth.useEffect.pointInPolygon": (point, polygon)=>{
                    const [x, y] = point;
                    let inside = false;
                    for(let i = 0, j = polygon.length - 1; i < polygon.length; j = i++){
                        const [xi, yi] = polygon[i];
                        const [xj, yj] = polygon[j];
                        if (yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi) {
                            inside = !inside;
                        }
                    }
                    return inside;
                }
            }["RotatingEarth.useEffect.pointInPolygon"];
            const pointInFeature = {
                "RotatingEarth.useEffect.pointInFeature": (point, feature)=>{
                    const geometry = feature.geometry;
                    if (geometry.type === "Polygon") {
                        const coordinates = geometry.coordinates;
                        if (!pointInPolygon(point, coordinates[0])) return false;
                        for(let i = 1; i < coordinates.length; i++){
                            if (pointInPolygon(point, coordinates[i])) return false;
                        }
                        return true;
                    }
                    if (geometry.type === "MultiPolygon") {
                        for (const polygon of geometry.coordinates){
                            if (pointInPolygon(point, polygon[0])) {
                                let inHole = false;
                                for(let i = 1; i < polygon.length; i++){
                                    if (pointInPolygon(point, polygon[i])) {
                                        inHole = true;
                                        break;
                                    }
                                }
                                if (!inHole) return true;
                            }
                        }
                        return false;
                    }
                    return false;
                }
            }["RotatingEarth.useEffect.pointInFeature"];
            const generateDotsInPolygon = {
                "RotatingEarth.useEffect.generateDotsInPolygon": (feature, dotSpacing = 16)=>{
                    const dots = [];
                    const bounds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$geo$2f$src$2f$bounds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__geoBounds$3e$__["geoBounds"](feature);
                    const [[minLng, minLat], [maxLng, maxLat]] = bounds;
                    const stepSize = dotSpacing * 0.08;
                    for(let lng = minLng; lng <= maxLng; lng += stepSize){
                        for(let lat = minLat; lat <= maxLat; lat += stepSize){
                            const point = [
                                lng,
                                lat
                            ];
                            if (pointInFeature(point, feature)) {
                                dots.push(point);
                            }
                        }
                    }
                    return dots;
                }
            }["RotatingEarth.useEffect.generateDotsInPolygon"];
            const allDots = [];
            let landFeatures;
            const generateArcPoints = {
                "RotatingEarth.useEffect.generateArcPoints": (start, end, numPoints = 100)=>{
                    const interpolate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$geo$2f$src$2f$interpolate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__geoInterpolate$3e$__["geoInterpolate"](start, end);
                    const points = [];
                    for(let i = 0; i <= numPoints; i++){
                        const t = i / numPoints;
                        const point = interpolate(t);
                        points.push(point);
                    }
                    return points;
                }
            }["RotatingEarth.useEffect.generateArcPoints"];
            const arcPoints = generateArcPoints(WEST_AFRICA, KARACHI, 120);
            let animTime = 0;
            let arcProgress = 0;
            let markerScale = 0;
            const easeOutElastic = {
                "RotatingEarth.useEffect.easeOutElastic": (t)=>{
                    if (t === 0 || t === 1) return t;
                    return Math.pow(2, -10 * t) * Math.sin((t - 0.075) * (2 * Math.PI / 0.3)) + 1;
                }
            }["RotatingEarth.useEffect.easeOutElastic"];
            const easeInOutCubic = {
                "RotatingEarth.useEffect.easeInOutCubic": (t)=>{
                    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
                }
            }["RotatingEarth.useEffect.easeInOutCubic"];
            const render = {
                "RotatingEarth.useEffect.render": ()=>{
                    context.clearRect(0, 0, containerWidth, containerHeight);
                    const currentScale = projection.scale();
                    const scaleFactor = currentScale / baseRadius;
                    // Ocean
                    context.beginPath();
                    context.arc(containerWidth / 2, containerHeight / 2, currentScale, 0, 2 * Math.PI);
                    context.fillStyle = "#05080f";
                    context.fill();
                    // Globe glow
                    const glowGradient = context.createRadialGradient(containerWidth / 2, containerHeight / 2, currentScale * 0.95, containerWidth / 2, containerHeight / 2, currentScale * 1.08);
                    glowGradient.addColorStop(0, "rgba(59, 130, 246, 0.08)");
                    glowGradient.addColorStop(0.5, "rgba(59, 130, 246, 0.03)");
                    glowGradient.addColorStop(1, "rgba(59, 130, 246, 0)");
                    context.beginPath();
                    context.arc(containerWidth / 2, containerHeight / 2, currentScale * 1.08, 0, 2 * Math.PI);
                    context.fillStyle = glowGradient;
                    context.fill();
                    // Border
                    context.beginPath();
                    context.arc(containerWidth / 2, containerHeight / 2, currentScale, 0, 2 * Math.PI);
                    context.strokeStyle = "rgba(255,255,255,0.15)";
                    context.lineWidth = 1.5;
                    context.stroke();
                    if (landFeatures) {
                        // Graticule
                        const graticule = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$geo$2f$src$2f$graticule$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__geoGraticule$3e$__["geoGraticule"]();
                        context.beginPath();
                        path(graticule());
                        context.strokeStyle = "rgba(255,255,255,0.06)";
                        context.lineWidth = 0.8 * scaleFactor;
                        context.stroke();
                        // Land outlines
                        context.beginPath();
                        for (const feature of landFeatures.features){
                            path(feature);
                        }
                        context.strokeStyle = "rgba(255,255,255,0.25)";
                        context.lineWidth = 1 * scaleFactor;
                        context.stroke();
                        // Halftone dots
                        for (const dot of allDots){
                            const projected = projection([
                                dot.lng,
                                dot.lat
                            ]);
                            if (projected && projected[0] >= 0 && projected[0] <= containerWidth && projected[1] >= 0 && projected[1] <= containerHeight) {
                                context.beginPath();
                                context.arc(projected[0], projected[1], 1.2 * scaleFactor, 0, 2 * Math.PI);
                                context.fillStyle = "rgba(150,160,180,0.5)";
                                context.fill();
                            }
                        }
                        // ===== ARC =====
                        if (arcProgress > 0) {
                            const visibleCount = Math.floor(arcProgress * arcPoints.length);
                            const visibleArc = arcPoints.slice(0, visibleCount);
                            const projectedArc = [];
                            for (const pt of visibleArc){
                                const p = projection(pt);
                                if (p) projectedArc.push([
                                    p[0],
                                    p[1]
                                ]);
                            }
                            if (projectedArc.length > 1) {
                                // Glow
                                context.beginPath();
                                context.moveTo(projectedArc[0][0], projectedArc[0][1]);
                                for(let i = 1; i < projectedArc.length; i++){
                                    context.lineTo(projectedArc[i][0], projectedArc[i][1]);
                                }
                                context.strokeStyle = "rgba(59, 130, 246, 0.3)";
                                context.lineWidth = 6 * scaleFactor;
                                context.lineCap = "round";
                                context.lineJoin = "round";
                                context.stroke();
                                // Main line
                                context.beginPath();
                                context.moveTo(projectedArc[0][0], projectedArc[0][1]);
                                for(let i = 1; i < projectedArc.length; i++){
                                    context.lineTo(projectedArc[i][0], projectedArc[i][1]);
                                }
                                context.strokeStyle = "rgba(59, 130, 246, 0.9)";
                                context.lineWidth = 2.5 * scaleFactor;
                                context.lineCap = "round";
                                context.lineJoin = "round";
                                context.stroke();
                            }
                            // Traveling dot (Karachi -> West Africa)
                            if (arcProgress >= 1) {
                                const travelT = animTime * 0.3 % 1;
                                const travelIdx = arcPoints.length - 1 - Math.floor(travelT * (arcPoints.length - 1));
                                const travelPt = projection(arcPoints[travelIdx]);
                                if (travelPt) {
                                    const travelGlow = context.createRadialGradient(travelPt[0], travelPt[1], 0, travelPt[0], travelPt[1], 12 * scaleFactor);
                                    travelGlow.addColorStop(0, "rgba(59, 130, 246, 0.6)");
                                    travelGlow.addColorStop(1, "rgba(59, 130, 246, 0)");
                                    context.beginPath();
                                    context.arc(travelPt[0], travelPt[1], 12 * scaleFactor, 0, 2 * Math.PI);
                                    context.fillStyle = travelGlow;
                                    context.fill();
                                    context.beginPath();
                                    context.arc(travelPt[0], travelPt[1], 3.5 * scaleFactor, 0, 2 * Math.PI);
                                    context.fillStyle = "#ffffff";
                                    context.fill();
                                }
                            }
                        }
                        // ===== MARKERS =====
                        if (markerScale > 0) {
                            const markers = [
                                {
                                    coords: WEST_AFRICA,
                                    label: "West Africa"
                                },
                                {
                                    coords: KARACHI,
                                    label: "Karachi"
                                }
                            ];
                            for (const marker of markers){
                                const p = projection(marker.coords);
                                if (!p) continue;
                                const x = p[0];
                                const y = p[1];
                                const s = markerScale;
                                const pulse = 0.5 + 0.5 * Math.sin(animTime * 3);
                                // Outer pulsing ring
                                const outerRadius = (18 + pulse * 10) * scaleFactor * s;
                                const ringGradient = context.createRadialGradient(x, y, 0, x, y, outerRadius);
                                ringGradient.addColorStop(0, "rgba(59, 130, 246, 0.0)");
                                ringGradient.addColorStop(0.5, "rgba(59, 130, 246, 0.0)");
                                ringGradient.addColorStop(0.7, `rgba(59, 130, 246, ${0.15 * (1 - pulse)})`);
                                ringGradient.addColorStop(1, "rgba(59, 130, 246, 0)");
                                context.beginPath();
                                context.arc(x, y, outerRadius, 0, 2 * Math.PI);
                                context.fillStyle = ringGradient;
                                context.fill();
                                // Second pulse ring
                                const pulse2 = 0.5 + 0.5 * Math.sin(animTime * 3 + 1.5);
                                const outerRadius2 = (12 + pulse2 * 8) * scaleFactor * s;
                                context.beginPath();
                                context.arc(x, y, outerRadius2, 0, 2 * Math.PI);
                                context.strokeStyle = `rgba(59, 130, 246, ${0.25 * (1 - pulse2)})`;
                                context.lineWidth = 1.5 * scaleFactor;
                                context.stroke();
                                // Inner glow
                                const innerGlow = context.createRadialGradient(x, y, 0, x, y, 10 * scaleFactor * s);
                                innerGlow.addColorStop(0, "rgba(59, 130, 246, 0.5)");
                                innerGlow.addColorStop(1, "rgba(59, 130, 246, 0)");
                                context.beginPath();
                                context.arc(x, y, 10 * scaleFactor * s, 0, 2 * Math.PI);
                                context.fillStyle = innerGlow;
                                context.fill();
                                // Core dot
                                context.beginPath();
                                context.arc(x, y, 4.5 * scaleFactor * s, 0, 2 * Math.PI);
                                context.fillStyle = "#3b82f6";
                                context.fill();
                                // Bright center
                                context.beginPath();
                                context.arc(x, y, 2 * scaleFactor * s, 0, 2 * Math.PI);
                                context.fillStyle = "#ffffff";
                                context.fill();
                                // Label
                                context.font = `${Math.round(10 * scaleFactor * s)}px 'Inter', system-ui, sans-serif`;
                                context.textAlign = "center";
                                context.textBaseline = "top";
                                const textWidth = context.measureText(marker.label).width;
                                const labelX = x;
                                const labelY = y + 16 * scaleFactor * s;
                                const padding = 6 * scaleFactor;
                                context.fillStyle = "rgba(0, 0, 0, 0.7)";
                                context.beginPath();
                                const rx = labelX - textWidth / 2 - padding;
                                const ry = labelY - 2 * scaleFactor;
                                const rw = textWidth + padding * 2;
                                const rh = 16 * scaleFactor * s + 4 * scaleFactor;
                                const cr = 4 * scaleFactor;
                                context.moveTo(rx + cr, ry);
                                context.lineTo(rx + rw - cr, ry);
                                context.quadraticCurveTo(rx + rw, ry, rx + rw, ry + cr);
                                context.lineTo(rx + rw, ry + rh - cr);
                                context.quadraticCurveTo(rx + rw, ry + rh, rx + rw - cr, ry + rh);
                                context.lineTo(rx + cr, ry + rh);
                                context.quadraticCurveTo(rx, ry + rh, rx, ry + rh - cr);
                                context.lineTo(rx, ry + cr);
                                context.quadraticCurveTo(rx, ry, rx + cr, ry);
                                context.closePath();
                                context.fill();
                                context.fillStyle = "#ffffff";
                                context.fillText(marker.label, labelX, labelY);
                            }
                        }
                    }
                }
            }["RotatingEarth.useEffect.render"];
            const loadWorldData = {
                "RotatingEarth.useEffect.loadWorldData": async ()=>{
                    try {
                        setIsLoading(true);
                        const response = await fetch("https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/110m/physical/ne_110m_land.json");
                        if (!response.ok) throw new Error("Failed to load land data");
                        landFeatures = await response.json();
                        for (const feature of landFeatures.features){
                            const dots = generateDotsInPolygon(feature, 16);
                            for (const [lng, lat] of dots){
                                allDots.push({
                                    lng,
                                    lat
                                });
                            }
                        }
                        setIsLoading(false);
                        startAnimation();
                    } catch  {
                        setError("Failed to load land map data");
                        setIsLoading(false);
                    }
                }
            }["RotatingEarth.useEffect.loadWorldData"];
            let animFrameId;
            const startAnimation = {
                "RotatingEarth.useEffect.startAnimation": ()=>{
                    const startTime = performance.now();
                    const animate = {
                        "RotatingEarth.useEffect.startAnimation.animate": (now)=>{
                            const elapsed = (now - startTime) / 1000;
                            animTime = elapsed;
                            if (elapsed < 0.8) {
                                markerScale = easeOutElastic(Math.min(elapsed / 0.8, 1));
                            } else {
                                markerScale = 1;
                            }
                            if (elapsed > 0.5) {
                                const arcElapsed = Math.min((elapsed - 0.5) / 2.0, 1);
                                arcProgress = easeInOutCubic(arcElapsed);
                            }
                            render();
                            animFrameId = requestAnimationFrame(animate);
                        }
                    }["RotatingEarth.useEffect.startAnimation.animate"];
                    animFrameId = requestAnimationFrame(animate);
                }
            }["RotatingEarth.useEffect.startAnimation"];
            loadWorldData();
            return ({
                "RotatingEarth.useEffect": ()=>{
                    if (animFrameId) cancelAnimationFrame(animFrameId);
                }
            })["RotatingEarth.useEffect"];
        }
    }["RotatingEarth.useEffect"], []);
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `flex items-center justify-center rounded-2xl p-8 ${className}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-semibold mb-2",
                        style: {
                            color: "#ef4444"
                        },
                        children: "Error loading Earth visualization"
                    }, void 0, false, {
                        fileName: "[project]/components/GlobeMap.tsx",
                        lineNumber: 442,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm",
                        style: {
                            color: "#9ca3af"
                        },
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/components/GlobeMap.tsx",
                        lineNumber: 445,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/GlobeMap.tsx",
                lineNumber: 441,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/GlobeMap.tsx",
            lineNumber: 440,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrapperRef,
        className: `relative w-full ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "block w-full h-auto",
                style: {
                    background: "transparent"
                }
            }, void 0, false, {
                fileName: "[project]/components/GlobeMap.tsx",
                lineNumber: 455,
                columnNumber: 7
            }, this),
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm animate-pulse",
                    style: {
                        color: "#9ca3af"
                    },
                    children: "Loading globe..."
                }, void 0, false, {
                    fileName: "[project]/components/GlobeMap.tsx",
                    lineNumber: 458,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/GlobeMap.tsx",
                lineNumber: 457,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/GlobeMap.tsx",
        lineNumber: 454,
        columnNumber: 5
    }, this);
}
_s(RotatingEarth, "k7VUgStZRew9nM4Dfcd1JMISx0Q=");
_c = RotatingEarth;
var _c;
__turbopack_context__.k.register(_c, "RotatingEarth");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/GlobeMap.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/GlobeMap.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_GlobeMap_tsx_cebf516c._.js.map