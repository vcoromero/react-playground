import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner'
import './index.css'

import { ProfessionalApp } from './09-useContext/ProfessionalApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp/> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    {/* <InstagromApp /> */}
    {/* <Suspense fallback={
      <div className='bg-gradient flex flex-col gap-4'>
        <h1 className='text-2xl'> cargando </h1>
      </div>
    }>
      <ClientInformation getUser={getUserAction(1000)} />
    </Suspense> */}
    <ProfessionalApp />
  </StrictMode>,
)
