import { TrendingUp, Users, ShoppingCart, Clock } from 'lucide-react';

const Stats = () => {
  return (
    <div className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <TrendingUp className="w-8 h-8 text-blue-400" />
            </div>
            <div className="text-4xl font-bold text-blue-400 mb-2">93%</div>
            <p className="text-gray-300">of online experiences begin with a search engine</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Users className="w-8 h-8 text-blue-400" />
            </div>
            <div className="text-4xl font-bold text-blue-400 mb-2">75%</div>
            <p className="text-gray-300">of users never scroll past the first page of search results</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <ShoppingCart className="w-8 h-8 text-blue-400" />
            </div>
            <div className="text-4xl font-bold text-blue-400 mb-2">43%</div>
            <p className="text-gray-300">of e-commerce traffic comes from organic Google search</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Clock className="w-8 h-8 text-blue-400" />
            </div>
            <div className="text-4xl font-bold text-blue-400 mb-2">2.6x</div>
            <p className="text-gray-300">higher conversion rate for SEO leads compared to outbound leads</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;