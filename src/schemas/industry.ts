import { Code, Server, Bot, Network, Database, ShoppingBag, FlaskRound as Flask, Coffee } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Feature {
  name: string;
  description?: string;
}

export interface Industry {
  name: string;
  description?: string;
}

export interface Solution {
  icon: LucideIcon;
  title: string;
  description: string;
  features: Feature[];
  industries: Industry[];
}

export const solutions: Solution[] = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored software solutions for enterprise needs across industries",
    features: [
      { name: "Microservices Architecture" },
      { name: "Cloud-Native Apps" },
      { name: "Legacy System Integration" }
    ],
    industries: [
      { name: "Retail" },
      { name: "Pharma" },
      { name: "IT" }
    ]
  },
  {
    icon: Server,
    title: "Cloud & Infrastructure",
    description: "Comprehensive cloud solutions and server management services",
    features: [
      { name: "LLM Hosting" },
      { name: "Kubernetes Clusters" },
      { name: "High-Performance Computing" }
    ],
    industries: [
      { name: "Enterprise" },
      { name: "AI/ML" },
      { name: "Research" }
    ]
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description: "Intelligent automation solutions with custom bots and AI agents",
    features: [
      { name: "Process Automation" },
      { name: "AI Workflows" },
      { name: "Custom Agents" }
    ],
    industries: [
      { name: "Manufacturing" },
      { name: "Services" },
      { name: "Finance" }
    ]
  },
  {
    icon: Network,
    title: "Internet Services",
    description: "Enterprise-grade connectivity and network solutions",
    features: [
      { name: "High-Speed Networks" },
      { name: "SD-WAN" },
      { name: "Cloud Connectivity" }
    ],
    industries: [
      { name: "ISP" },
      { name: "Enterprise" },
      { name: "Data Centers" }
    ]
  },
  {
    icon: Flask,
    title: "Pharma Solutions",
    description: "Specialized software for pharmaceutical industry",
    features: [
      { name: "Clinical Trials" },
      { name: "Supply Chain" },
      { name: "Quality Control" }
    ],
    industries: [
      { name: "Pharma" },
      { name: "Biotech" },
      { name: "Research" }
    ]
  },
  {
    icon: Coffee,
    title: "Hospitality Tech",
    description: "Digital solutions for restaurants and hospitality",
    features: [
      { name: "POS Systems" },
      { name: "Inventory" },
      { name: "Customer Management" }
    ],
    industries: [
      { name: "Restaurants" },
      { name: "Hotels" },
      { name: "Catering" }
    ]
  }
];