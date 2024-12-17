import Image from 'next/image'

interface TeamMemberProps {
  name: string
  role: string
  imageUrl: string
}

export function TeamMember({ name, role, imageUrl }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
        <Image src={imageUrl} alt={name} width={128} height={128} className="object-cover" />
      </div>
      <h3 className="text-lg font-semibold text-blue-800">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  )
}

