import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Node {
  id: number;
  x: number;
  y: number;
  connections: number[];
}

export function NetworkBackground() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [dimensions, setDimensions] = useState({ width: 1000, height: 800 });

  useEffect(() => {
    // Client-side only calculation to avoid hydration mismatch
    const width = window.innerWidth;
    const height = window.innerHeight;
    setDimensions({ width, height });

    const generatedNodes: Node[] = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
      connections: [],
    }));

    // Connect nodes
    generatedNodes.forEach((node, i) => {
      const numConnections = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < numConnections; j++) {
        const targetId = Math.floor(Math.random() * generatedNodes.length);
        if (targetId !== i && !node.connections.includes(targetId)) {
          node.connections.push(targetId);
        }
      }
    });

    setNodes(generatedNodes);

    const handleResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <svg width={dimensions.width} height={dimensions.height} className="absolute inset-0">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        
        {nodes.map((node) =>
          node.connections.map((targetId) => {
            const target = nodes[targetId];
            if (!target) return null;
            return (
              <motion.line
                key={`${node.id}-${targetId}`}
                x1={node.x}
                y1={node.y}
                x2={target.x}
                y2={target.y}
                stroke="url(#line-gradient)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 1, 0], 
                  opacity: [0, 0.5, 0.5, 0] 
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 5,
                }}
              />
            );
          })
        )}
        
        {nodes.map((node) => (
          <motion.circle
            key={`node-${node.id}`}
            cx={node.x}
            cy={node.y}
            r={2}
            fill="hsl(var(--primary))"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.5, 1], 
              opacity: [0, 0.8, 0.4] 
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
