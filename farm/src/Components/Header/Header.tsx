

const Header = ({title, description}: {title: string, description: string}) => {
  return (
    <div className="flex items-end justify-between my-10">
<div className="flex-1 text-center lg:text-center">
    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">{title}</h2>
    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600  text-center">{description}</p>
</div>
</div>
  )
}

export default Header