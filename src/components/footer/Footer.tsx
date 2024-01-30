import { FacebookLogo, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import { ReactNode, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {

  let data = new Date().getFullYear()

  const { usuario} = useContext(AuthContext)

  let component: ReactNode

  

  if (usuario.token !== "") {
    component = (
         <div className="flex justify-center bg-slate-800 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Blog pessoal | Copyright: {data} </p>
                    <p className='text-lg'>Conecte-se comigo pelas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="https://github.com/VictoriaCM/" target="_blank">
                            <GithubLogo size={40} weight='bold' />
                        </a>
                        <a href="https://www.linkedin.com/in/victória-moraes/" target="_blank">
                            <LinkedinLogo size={40} weight='bold' />
                        </a>
                        <a href="https://www.facebook.com/Vicmoraesc" target="_blank">
                            <FacebookLogo size={40} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
 
  return (
    <>
       {component}
      </>
  )
}

export default Footer