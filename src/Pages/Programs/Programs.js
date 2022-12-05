import React from 'react';
import useTitle from '../../Components/Title/Title';

import Card from './Card/Card';

const Programs = () => {
    useTitle("Programs")
    return (
      <section className="py-10 px-5 lg:w-[1350px] lg:m-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 justify-items-center grid-cols-1">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </section>
    );
};

export default Programs;