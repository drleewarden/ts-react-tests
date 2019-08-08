import * as React from 'react';
 
export interface IProductProps {
 id: number,
 pageTitle: string,
 imgSrc: string,
 imgAlt: string

}

export interface ISnapshotState{
    count: number
}

class ProductSnapshot extends React.Component<IProductProps, ISnapshotState> {
    constructor(props:IProductProps){
        super(props)
        this.state = {
            count: props.id
          };
        
    }
    public poper = () => {
            this.setState({
                count: (this.state.count - 1)
              });
    }
    public render(){

    const {id, pageTitle, imgSrc,imgAlt} = this.props;
            return (
                <div><h1>testing data {this.state.count}</h1>
                    <em>{id}</em>
                    <p>{pageTitle}</p>
                        <img
                            className='img-thumbnail'
                            src={imgSrc}
                            alt={imgAlt}
                        />
                        <button onClick={this.poper}>up date the state</button>
                </div>
            )
        }
    }
export default ProductSnapshot