// import MatchdaySelector from '@/components/matchday-selector'
// import PageHeading from '@/components/page-heading'
// import React from 'react'
// import prisma from '@/lib/prisma';

// async function getFootballLeagues() {
//     const leagues = await prisma.footballLeague.findMany();
//     return leagues.map(league => ({
//         id: league.id,
//         name: league.name,
//         imagePath: league.imagePath,
//         country: league.country,
//         sportmonksID: league.sportmonksID,
//     }));
// }
  
// export default async function PredictorPage() {
//   const leagues = await getFootballLeagues();

//   return (
//     <>
//     <div className='w-full bg-primary'>
//         <div className='mx-auto flex max-w-7xl p-6 lg:px-8'>
//             <PageHeading leagues={leagues}/>
//         </div>
//     </div>
//     <div className='mx-auto flex max-w-7xl p-6 lg:px-8'>
//         {/* Matchday Selector */}
//         <MatchdaySelector matchdays={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
//     </div>
//     </>
//   )
// }

import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}
