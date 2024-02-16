import { useState } from "react";


const DynamicInput = () => {
    const [inputVisible, setInputVisible] = useState(false);
    const handleAddInput = () => {
        setInputVisible(true);
      };
  return (
    <div>DynamicInput</div>
  )
}

export default DynamicInput