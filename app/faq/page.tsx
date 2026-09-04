import { faqs } from '@/lib/a2z-data'
import { Accordion, PageHeader, Shell } from '@/components/a2z-site'
export default function FAQPage(){return <Shell><PageHeader eyebrow="Buyer FAQ" title="The practical answers, before diligence begins.">Everything here is framed for an acquisition conversation. Live credentials, analytics and transfer checks are completed privately during diligence.</PageHeader><div className="mx-auto max-w-3xl px-5 py-14 lg:py-20">{faqs.map(([q,a])=><Accordion key={q} question={q} answer={a}/>)}</div></Shell>}
