
"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { Suspense, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import type { IconType } from "react-icons";

import {
    SiNextdotjs,
    SiReact,
    SiGithub,
    SiTailwindcss,
    SiMongodb,
    SiNodedotjs,
    SiTypescript,
    SiExpress,
    SiNetlify,
    SiJavascript,
    SiHtml5,
    SiVercel,
} from "react-icons/si";

import { FaCode, FaDatabase, FaGitAlt } from "react-icons/fa6";

type Technology = {
    name: string;
    icon: IconType;
    color: string;
    lat: number;
    lon: number;
};

const technologies: Technology[] = [
    { name: "Next.js", icon: SiNextdotjs, color: "#e5e7eb", lat: 12, lon: -125 },
    { name: "React", icon: SiReact, color: "#61dafb", lat: 30, lon: 25 },
    { name: "TypeScript", icon: SiTypescript, color: "#3178c6", lat: 5, lon: -65 },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4", lat: -5, lon: 115 },
    { name: "MongoDB", icon: SiMongodb, color: "#47a248", lat: 40, lon: 100 },
    { name: "Node.js", icon: SiNodedotjs, color: "#5fa04e", lat: 55, lon: 65 },
    { name: "Express.js", icon: SiExpress, color: "#d1d5db", lat: 20, lon: 75 },
    { name: "Git", icon: FaGitAlt, color: "#f05032", lat: -25, lon: -115 },
    { name: "GitHub", icon: SiGithub, color: "#ffffff", lat: 8, lon: -20 },
    { name: "Vercel", icon: SiVercel, color: "#ffffff", lat: 58, lon: 45 },
    { name: "Netlify", icon: SiNetlify, color: "#00c7b7", lat: -35, lon: 125 },
    { name: "JavaScript", icon: SiJavascript, color: "#f7df1e", lat: -15, lon: -55 },
    { name: "HTML", icon: SiHtml5, color: "#e34f26", lat: 45, lon: -150 },
    { name: "Database", icon: FaDatabase, color: "#22d3ee", lat: -10, lon: 35 },
    { name: "API", icon: FaCode, color: "#a78bfa", lat: -50, lon: -25 },
];

const GLOBE_RADIUS = 1.50;
const GLOBE_COLOR = "#10b981";

function getGlobePosition(
    lat: number,
    lon: number,
    radius: number,
): [number, number, number] {
    const latitude = (lat * Math.PI) / 180;
    const longitude = (lon * Math.PI) / 180;

    return [
        radius * Math.cos(latitude) * Math.sin(longitude),
        radius * Math.sin(latitude),
        radius * Math.cos(latitude) * Math.cos(longitude),
    ];
}

function TechnologyBadge({
    tech,
    position,
}: {
    tech: Technology;
    position: [number, number, number];
}) {
    const badgeRef = useRef<THREE.Group>(null);
    const htmlRef = useRef<HTMLDivElement>(null);
    const { camera } = useThree();

    useFrame(() => {
        if (!badgeRef.current || !htmlRef.current) return;

        const worldPosition = new THREE.Vector3();
        badgeRef.current.getWorldPosition(worldPosition);

        const cameraWorldPosition = new THREE.Vector3();
        camera.getWorldPosition(cameraWorldPosition);

        const directionToCamera = cameraWorldPosition
            .sub(worldPosition)
            .normalize();

        const surfaceNormal = worldPosition.clone().normalize();

        const facing = surfaceNormal.dot(directionToCamera);

        // Smoothly fade badges as they move around the globe.
        const opacity = THREE.MathUtils.smoothstep(
            facing,
            -0.25,
            0.35,
        );

        htmlRef.current.style.opacity = opacity.toString();
    });

    const Icon = tech.icon;

    return (
        <group ref={badgeRef} position={position}>
            <Html
                center
                distanceFactor={3.1}
                zIndexRange={[10, 0]}
                style={{
                    pointerEvents: "none",
                    whiteSpace: "nowrap",
                }}
            >
                <div
                    ref={htmlRef}
                    className="flex items-center gap-2 rounded-full border px-3 py-2 sm:gap-2.5 sm:px-4 sm:py-2.5"
                    style={{
                        opacity: 1,
                        transition: "opacity 80ms linear",
                        color: tech.color,
                        borderColor: `${tech.color}66`,
                        background: "rgba(8, 11, 18, 0.95)",
                        boxShadow: `0 0 16px ${tech.color}22`,
                    }}
                >
                    <Icon className="shrink-0 text-base sm:text-xl" />
                    <span className="text-xs font-semibold sm:text-sm">
                        {tech.name}
                    </span>
                </div>
            </Html>
        </group>
    );
}


function Globe() {
    const globeRef = useRef<THREE.Group>(null);

    const gridLines = useMemo(() => {
        const geometries: THREE.BufferGeometry[] = [];

        // Latitude lines
        for (let lat = -75; lat <= 75; lat += 15) {
            const points: THREE.Vector3[] = [];
            const latitude = (lat * Math.PI) / 180;

            for (let i = 0; i <= 180; i++) {
                const longitude = (i / 180) * Math.PI * 2;

                points.push(
                    new THREE.Vector3(
                        Math.cos(latitude) * Math.sin(longitude),
                        Math.sin(latitude),
                        Math.cos(latitude) * Math.cos(longitude),
                    ),
                );
            }

            geometries.push(new THREE.BufferGeometry().setFromPoints(points));
        }

        // Full longitude lines
        for (let lon = 0; lon < 360; lon += 15) {
            const points: THREE.Vector3[] = [];
            const longitude = (lon * Math.PI) / 180;

            for (let i = 0; i <= 180; i++) {
                const latitude = (i / 180) * Math.PI - Math.PI / 2;

                points.push(
                    new THREE.Vector3(
                        Math.cos(latitude) * Math.sin(longitude),
                        Math.sin(latitude),
                        Math.cos(latitude) * Math.cos(longitude),
                    ),
                );
            }

            geometries.push(new THREE.BufferGeometry().setFromPoints(points));
        }

        return geometries.map(
            (geometry) =>
                new THREE.Line(
                    geometry,
                    new THREE.LineBasicMaterial({
                        color: GLOBE_COLOR,
                        transparent: true,
                        opacity: 0.15,
                        depthWrite: false,
                    }),
                ),
        );
    }, []);

    useFrame((_, delta) => {
        if (globeRef.current) {
            globeRef.current.rotation.y += delta * 0.12;
        }
    });

    return (
        <group ref={globeRef} scale={GLOBE_RADIUS}>
            {/* Subtle transparent emerald interior */}
            <mesh>
                <sphereGeometry args={[0.995, 64, 64]} />
                <meshBasicMaterial
                    color={GLOBE_COLOR}
                    transparent
                    opacity={0.01}
                    depthWrite={false}
                />
            </mesh>

            {/* Emerald wireframe */}
            {gridLines.map((line, index) => (
                <primitive key={index} object={line} />
            ))}

            {/* Technology badges rotate with the globe */}
            {/* {technologies.map((tech) => {
                const Icon = tech.icon;
                const position = getGlobePosition(tech.lat, tech.lon, 1.025);

                return (
                    <Html
                        key={tech.name}
                        position={position}
                        center
                        distanceFactor={3.1}
                        zIndexRange={[10, 0]}
                        style={{
                            pointerEvents: "none",
                            whiteSpace: "nowrap",
                        }}
                    >
                        <div
                            className="flex items-center gap-2 rounded-full border px-3 py-2 sm:gap-2.5 sm:px-4 sm:py-2.5"
                            style={{
                                color: tech.color,
                                borderColor: `${tech.color}66`,
                                background: "rgba(8, 11, 18, 0.95)",
                                boxShadow: `0 0 16px ${tech.color}22`,
                            }}
                        >
                            <Icon className="shrink-0 text-base sm:text-xl" />

                            <span className="text-xs font-semibold sm:text-sm">
                                {tech.name}
                            </span>
                        </div>
                    </Html>
                );
            })} */}

            {technologies.map((tech) => (
    <TechnologyBadge
        key={tech.name}
        tech={tech}
        position={getGlobePosition(tech.lat, tech.lon, 1.025)}
    />
))}
        </group>
    );
}


export default function SkillsGlobe() {
    const [isDragging, setIsDragging] = useState(false);

    return (
        <div
            className={`relative mx-auto h-150 w-full max-w-6xl overflow-visible ${
                isDragging ? "cursor-grabbing" : "cursor-grab"
            } sm:h-180`}
            onPointerDown={() => setIsDragging(true)}
            onPointerUp={() => setIsDragging(false)}
            onPointerLeave={() => setIsDragging(false)}
        >
            <Canvas
                camera={{
                    position: [0, 0, 4.5],
                    fov: 45,
                }}
                dpr={[1, 1.5]}
                gl={{
                    alpha: true,
                    antialias: true,
                }}
            >
                <Suspense fallback={null}>
                    <Globe />

                    <OrbitControls
                        enablePan={false}
                        enableZoom={false}
                        rotateSpeed={0.6}
                        minPolarAngle={Math.PI / 3}
                        maxPolarAngle={(Math.PI * 2) / 3}
                    />
                </Suspense>
            </Canvas>

            <p className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-gray-500">
                ◉ Drag to rotate
            </p>
        </div>
    );
}
