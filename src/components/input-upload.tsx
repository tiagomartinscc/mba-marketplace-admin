import { ChangeEvent, ComponentProps, useState } from 'react'

interface InputUploadProps extends ComponentProps<'input'> {
  onFileChange: (file: File | null) => void
}

export function InputUpload({ onFileChange }: InputUploadProps) {
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  async function handleFileUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] || null
    setImagePreview(file
      ? URL.createObjectURL(file)
      : null)
    onFileChange(file)
  }

  return (
    <label>
      {imagePreview
        ? (
          <img src={imagePreview} className="w-44 h-44" />
          )
        : (
          <img src="/profile.svg" />
          )}
      <input
        id="file"
        className="hidden"
        accept="image/png"
        type="file"
        onChange={handleFileUpload}
      />

    </label>
  )
}
