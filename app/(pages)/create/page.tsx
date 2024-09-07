import Section from '@/components/common/section'
import CreateForm from './_components/form'
import SectionHeader from '@/components/common/section-header'
import { Protect } from '@clerk/nextjs'
import Forbidden from '@/components/forbidden'

export default function Create() {
  return (
    <Protect permission="org:vote:create" fallback={<Forbidden />}>
      <Section>
        <SectionHeader
          title="Create New Boarding House Listing"
          description="Fill out the form below to add a new boarding house to our listings."
        />
        <CreateForm />
      </Section>
    </Protect>
  )
}
