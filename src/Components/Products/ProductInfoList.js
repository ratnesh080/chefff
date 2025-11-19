import React from 'react';

const ProductInfoList = (props = []) => {
  const allAttr = [];
  Object.values(props).forEach((prop) => allAttr.push(...prop.attributes));
  const discalimerIndex = allAttr.findIndex(
    (item) => item.title === 'Disclaimer'
  );
  if (discalimerIndex > -1) {
    allAttr.push(allAttr.splice(discalimerIndex, 1)[0]);
  }

  return (
    <div className="py-4">
      <dl>
        {allAttr.map((attr, i) => (
          <React.Fragment key={i}>
            <dt className="text-sm font-extrabold text-black mb-2">
              {attr.title}
            </dt>
            <dd className="text-sm mb-4 _text-default">{attr.value}</dd>
          </React.Fragment>
        ))}
      </dl>
    </div>
  );
};

export default ProductInfoList;