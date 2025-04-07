import { BriefcaseIcon, CheckIcon, InfoIcon, ListIcon, LucideIcon, MessageCircle, PencilIcon, ShieldIcon, WrenchIcon } from "lucide-react";
import { IconType } from "react-icons";

interface Problem {
    title: string
    description: string
    icon: LucideIcon | IconType 
}

export const developerProblems: Problem[] = [
    {
      title: "Pricing Uncertainty",
      description: "Stop undervaluing your work and learn exactly what to charge for different website components.",
      icon: InfoIcon
    },
    {
      title: "Detailed Breakdowns",
      description: "Get detailed breakdowns of costs for plugins, themes, and development time.",
      icon: ListIcon
    },
    {
      title: "Client Communication",
      description: "Get detailed breakdowns that help explain your pricing structure to clients with confidence and professionalism.",
      icon: MessageCircle
    },
    {
      title: "Maintenance Pricing",
      description: "Understand how to price ongoing maintenance and support services.",
      icon: WrenchIcon
    }
  ];


  export const businessProblems: Problem[] = [
    {
      title: "Budget Planning",
      description: "Get transparent pricing insights to plan your website budget effectively.",
      icon: PencilIcon
    },
    {
      title: "Feature Selection",
      description: "Understand which features you actually need and their associated costs, making informed decisions about your website investment.",
      icon: CheckIcon
    },
    {
      title: "Cost Prevention",
      description: "Avoid unexpected costs with comprehensive breakdowns of all website components.",
      icon: ShieldIcon
    },
    {
      title: "Investment Planning",
      description: "Make informed decisions about website investments and maintenance plans.",
      icon: BriefcaseIcon
    }
  ];