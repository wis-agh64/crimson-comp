import { getArticle } from '@/lib/api'

// components/MyServerComponent.tsx
type MyServerComponentProps = {
    inputData: string;
  };
  
  async function extractResultFromPromise(inputData: string) {
    try {
      // Call the function that returns a Promise
      const result = await getArticle(inputData);
      // Extract the result from the resolved Promise and return it
      return result;
    } catch (error) {
      console.error('Error:', error);
      // Handle error if necessary
      return null;
    }
  }
  const MyServerComponent: React.FC<MyServerComponentProps> = ({ inputData }) => {
    // Process inputData here (e.g., convert to uppercase)
    console.log(extractResultFromPromise(inputData)); 
    
  };
  
  export default MyServerComponent;
  