"use client";
import { useEffect } from "react";
import mermaid from "mermaid";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

mermaid.initialize({
  startOnLoad: true,
  theme: "default",
  securityLevel: "loose",
  flowchart: {
    useMaxWidth: false,
    htmlLabels: true,
  },
});

export default function MermaidChart({ chartCode }) {
  useEffect(() => {
    mermaid.contentLoaded();
  }, [chartCode]);

  // Dots pattern ka style
  const dotPattern = {
    backgroundColor: "#ebebeb", // Light background
    backgroundImage: "radial-gradient(#bebebe 2px, transparent 1px)", // Dot color and size
    backgroundSize: "25px 25px", // Dots ke darmiyan fasla
  };

  return (
    <div className="border rounded-lg overflow-hidden relative h-[600px] w-full shadow-inner" style={dotPattern}>
      <TransformWrapper
        initialScale={1}
        centerOnInit={true}
        minScale={0.2}
        maxScale={3}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div className="absolute bottom-4 right-4 z-10 flex gap-2">
              <button onClick={() => zoomIn()} className="bg-white px-4 py-2 border rounded shadow hover:bg-gray-100 font-bold">+</button>
              <button onClick={() => zoomOut()} className="bg-white px-4 py-2 border rounded shadow hover:bg-gray-100 font-bold">-</button>
              <button onClick={() => resetTransform()} className="bg-white px-4 py-2 border rounded shadow hover:bg-gray-100 text-sm">Reset</button>
            </div>
            
            {/* Background Style yahan apply kiya hai */}
            <TransformComponent wrapperStyle={{ width: "100%", height: "100%" }}>
              <div 
                className="mermaid p-40 cursor-grab active:cursor-grabbing min-w-[2000px] min-h-[1000px] flex justify-center items-center"
              >
                {chartCode}
              </div>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
}