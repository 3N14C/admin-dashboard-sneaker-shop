import { DashboardTitle } from '@/components/ui/dashboard-title'
import { NextPage } from 'next'
import { SneakerList } from './_components/sneaker-list'

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return <div>
    <DashboardTitle title='Товары' />

    <div className="mt-10">
        <SneakerList />
    </div>
  </div>
}

export default Page