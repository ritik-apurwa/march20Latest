import React from "react";
import { useParams } from "react-router-dom";
import { HtmlElement, sdata } from "./SearchbarData";

const SearchbarResults: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>No item selected.</div>;
  }

  // Parse id to integer
  const parsedId = parseInt(id);

  // Find the selected item
  const selectedItem: HtmlElement | undefined = sdata.find(
    (item) => item.id === parsedId
  );

  return (
    <div className="w-full h-full bg-gray-100 py-10 flex justify-center flex-col">
      {selectedItem && (
        <div className="container space-y-4 flex flex-col justify-center mx-auto ">
          <h3 className="flex w-full capitalize justify-center font-bold">
            {selectedItem.tag}
          </h3>
          <p className="flex p-4 font-semibold">{selectedItem.description}</p>
          <h4 className="block font-semibold">Attributes:</h4>
          <ul>
            {selectedItem.attributes.map((attribute, index) => (
              <div key={index}>
                <div className="font-semibold text-blue-400">
                  {attribute.name}
                </div>
                <div className="flex p-4">{attribute.description}</div>
                <div>{attribute.value_description}</div>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchbarResults;
