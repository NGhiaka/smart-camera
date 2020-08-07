import { useEffect, useState } from 'react'

const useModel = (modelPath) => {
  const [model, setModel] = useState()
  useEffect(() => {
  	model = new cv.CascadeClassifier();
    model.load(modelPath).then((model) => {
    	setModel(model)
    })
  }, [modelPath])
  return model
}

export default useModel