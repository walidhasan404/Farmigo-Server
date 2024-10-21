import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
interface MetaProps {
    title?: string;
    description?: string;
  }
  
  const useMeta = (meta: MetaProps | undefined) => {
    const location = useLocation();
  
    useEffect(() => {
      if (meta) {
        document.title = meta.title || 'Farmigo';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', meta.description || 'Default Description');
        }
      }
    }, [location.pathname, meta]);
  };
  
  export default useMeta;
