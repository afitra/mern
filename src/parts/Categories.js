import React from "react";
import Button from "elements/Button/Button";

export default function Categories({ data }) {
  console.log(">>>>", data);
  return data.map((category, index1) => {
    return (
      <section className="container" key={`category-${index1}`}>
        <h4 className="mb-3 font-weight-medium">{category.name}</h4>
        <div className={`container-grid`}>
          {category.items.length === 0 ? (
            <div className="row">
              <div className="col-auto align-items-center">
                theere is no property in a category
              </div>
            </div>
          ) : (
            category.items.map((item, index2) => {
              return (
                <div
                  className="item column-3 row-1"
                  key={`category-${index1}-item-${index2}`}
                >
                  <div className="card">
                    {item.isPopular && (
                      <div className="tag">
                        Popular<span className="font-weight-light">choise</span>
                      </div>
                    )}
                    <figure className="img-wrapper" style={{ height: 180 }}>
                      <img
                        src={item.imgUrl}
                        alt={item.name}
                        className="img-cover"
                      ></img>
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        href={`/properties/${item._id}`}
                        className={`stretched-link d-block text-gray-800`}
                      >
                        <h5 className="h4">{item.name}</h5>
                      </Button>{" "}
                      <span> {`${item.city},${item.country}`}</span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    );
  });
}
