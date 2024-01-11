'use client'

import { useCallback } from 'react'
import Image from 'next/image'
import { ImagePlusIcon } from 'lucide-react'
import { CldUploadWidget } from 'next-cloudinary'

declare global {
  var cloudinary: any
}

const uploadPreset = 'du1vewppc'

interface ImageUploadProps {
  onChange: (value: string) => void
  value: string
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  value,
}) => {
  const handleUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url)
    },
    [onChange]
  )

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset={uploadPreset}
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-muted flex flex-col justify-center items-center gap-4 text-muted-foreground"
          >
            <ImagePlusIcon size={50} />
            <div className="font-semibold text-lg">Click to upload</div>
            {value && (
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={value}
                  alt={'Event Image Upload'}
                  width={400}
                  height={400}
                  className="aspect-square h-full w-full object-cover object-center"
                />
              </div>
            )}
          </div>
        )
      }}
    </CldUploadWidget>
  )
}
