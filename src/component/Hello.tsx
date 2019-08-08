// src/components/Hello.tsx

import * as React from 'react';
// import {Link} from 'react-router';
import ProductSnapshot from './product-snapshot'

import Product from './products';
 
export interface IHelloProps {
  name: string;
  enthusiasmLevel?: number;
  id: number;
}

class Hello extends React.Component<IHelloProps, object> {
  public render() {
    const { name, enthusiasmLevel = 1, id} = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">
        <ProductSnapshot id={33}
          pageTitle={'asdasasda'}
          imgSrc={'/sada'}
          imgAlt={'dsf'}
          />
        <div className="greeting">
          <h1>{id}</h1>
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
        <Product id={2} pageTitle="product one" imgSrc="htc-one-m7-802w-dual-sim-silver.jpg" imgAlt="phone picture"/>
      </div>
    );
  }
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}