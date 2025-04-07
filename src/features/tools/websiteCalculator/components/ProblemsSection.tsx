import { InfoCard } from "@/components/ui";
import { businessProblems, developerProblems } from "../utils";
import { LeadingSection } from "@/features/services/components";
import { DollarSign } from "lucide-react";





export function ProblemsSection() {


  return (
    <div className="py-12 relative overflow-hidden">
      
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <LeadingSection heading="Common Website Pricing Challenges We Solve" description="We understand that website pricing can be complex and time-consuming. That's why we've created a simple and transparent pricing calculator to help you estimate the cost of your project."  badgeText="Reasons Why" icon={DollarSign}/>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* For Developers */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="h-8 w-1 bg-primary rounded-full" />
              <h3 className="text-2xl font-semibold text-primary">For Web Developers</h3>
            </div>
            <div className="grid gap-4">
              {developerProblems.map((problem, idx) => (
                <InfoCard key={idx} index={idx} icon={problem.icon} title={problem.title} color="blue" description={problem.description} />
              ))}
            </div>
          </div>

          {/* For Business Owners */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="h-8 w-1 bg-secondary-green rounded-full" />
              <h3 className="text-2xl font-semibold text-secondary-green">For Business Owners</h3>
            </div>
            <div className="grid gap-4">
              {businessProblems.map((problem, idx) => (
                <InfoCard key={idx} index={idx} icon={problem.icon} title={problem.title} color="green" description={problem.description}  />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}