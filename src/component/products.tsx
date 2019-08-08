import * as React from 'react';
 
export interface IProductProps {
  id: number;
  pageTitle: string;
  imgSrc: string;
  imgAlt: string;
  

}

class Product extends React.Component<IProductProps, object> {
    
    public render(){
    const {id, pageTitle, imgSrc,imgAlt} = this.props;

        
            return (
                <div>
                    <em>{id}</em>
                    <p>{pageTitle}</p>
                        <img
                            className='img-thumbnail'
                            src={imgSrc}
                            alt={imgAlt}
                        />
                </div>
            )
        }
    }
export default Product