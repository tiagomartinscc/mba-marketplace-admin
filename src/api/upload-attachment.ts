import { api } from '../lib/axios'

export async function uploadAttachment(attachment: File) {
  const formData = new FormData()
  formData.append('files', attachment)
  return await api.postForm('/attachments', formData)
}
