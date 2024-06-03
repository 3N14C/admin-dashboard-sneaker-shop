import { DashboardTitle } from '@/components/ui/dashboard-title'
import { NextPage } from 'next'
import { SneakerPage } from './_components/sneaker-page-component'

interface Props {
    params: {
        sneakerId: string
    }
}

const Page: NextPage<Props> = ({params}) => {
  return <div>
    <SneakerPage sneakerId={params.sneakerId} />
  </div>
}

export default Page