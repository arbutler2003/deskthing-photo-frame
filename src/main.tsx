import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ImageViewer } from './ImageViewer'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ImageViewer 
      imageUrl='/public/test-photo.png'
      altText='Test Photo '
      />
  </StrictMode>,
)
