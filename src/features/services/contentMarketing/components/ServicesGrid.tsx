'use client'
import {
  ArticleBeneffits,
  ArticleProblems,
  ContentMarketingGridComponent,
  EBookBenefits,
  EBookProblems,
  InfoBenefits,
  InfoProblems,
  PodcastBenefits,
  PodCastProblems,
  SocialMediaBenefits,
  SocialMediaProblems,
  VideoBenefits,
  VideoProblems,
} from './ServicesGridComponents'
import { LeadingSection } from '../../components'
import {
  BookOpen,
  FileText,
  LineChart,
  MailOpen,
  Share,
  Video,
  VideoIcon,
} from 'lucide-react'
import { MicrophoneIcon } from '@heroicons/react/24/outline'
import { NewsLettersBenefits } from './ServicesGridComponents/NewsLetterBenefits'
import { NewsLetterProblems } from './ServicesGridComponents/MewsLetterProblems'

export const ContentMarketingServicesGrid = () => {
  return (
    <div className='container mx-auto'>
      <div className='text-center mb-12'>
        <LeadingSection
          badgeText='Content Marketing Challenges'
          description='We understand the complexities of modern content marketing. From
          inconsistent messaging to low engagement rates, we transform these
          challenges into growth opportunities through strategic, data-driven
          content solutions.'
          heading='Transform Your Content Challenges into Opportunities'
          icon={VideoIcon}
        />
      </div>

      <div>
        <ContentMarketingGridComponent
          icon={FileText}
          benefits={<ArticleBeneffits />}
          description='Rank higher, convert better.'
          problems={<ArticleProblems />}
          title='Articles & Blogs'
        />
        <ContentMarketingGridComponent
          icon={Video}
          benefits={<VideoBenefits />}
          description=" Show, don't just tell."
          problems={<VideoProblems />}
          title='Educational Videos'
        />
        <ContentMarketingGridComponent
          icon={LineChart}
          benefits={<InfoBenefits />}
          description=' STurn data into visual stories.'
          problems={<InfoProblems />}
          title="Infographic's"
        />
        <ContentMarketingGridComponent
          icon={MicrophoneIcon}
          benefits={<PodcastBenefits />}
          description='Voice your expertise..'
          problems={<PodCastProblems />}
          title='Podcasts'
        />
        <ContentMarketingGridComponent
          icon={BookOpen}
          benefits={<EBookBenefits />}
          description='Lead magnets that convert.'
          problems={<EBookProblems />}
          title='Ebooks & Guides'
        />
        <ContentMarketingGridComponent
          icon={Share}
          benefits={<SocialMediaBenefits />}
          description='Engage and grow.'
          problems={<SocialMediaProblems />}
          title='Social Media Posts'
        />
        <ContentMarketingGridComponent
          icon={MailOpen}
          benefits={<NewsLettersBenefits />}
          description='Nurture and convert.'
          problems={<NewsLetterProblems />}
          title='Newsletters'
        />
       
      </div>
    </div>
  )
}
