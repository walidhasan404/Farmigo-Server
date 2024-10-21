
import { ScaleLoader } from 'react-spinners'

const Loading = ({ smallHeight }: { smallHeight: boolean }) => {
  return (
    <div
      className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
     <ScaleLoader height={35} width={5} radius={2} color='green' />
    </div>
  )
}



export default Loading