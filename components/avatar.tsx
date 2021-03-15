import { FC } from 'react'

interface AvatarProps {
  name: string
  picture: any
}

const Avatar: FC<AvatarProps> = ({ name, picture }) => {
  return (
    <div className="flex items-center">
      <img src={picture.url} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}

export default Avatar
