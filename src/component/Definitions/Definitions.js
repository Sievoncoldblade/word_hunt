import React from "react";
import "./Definitions.css";

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

const Definitions = ({ word, category, meanings }) => {
  return (
    <div className="meanings">
      {word === "" ? (
        <span className="subTitle">Start by typing something...</span>
      ) : (
        meanings.map((meanings) =>
          meanings.meanings.map((meanings) =>
            meanings.definitions.map((meaning) => (
              <div className="meaning">
                <div className="definition">
                  <b>{meaning.definition}</b>
                </div>
                {meaning.example && (
                  <div className="example">
                    <b>Example: </b>
                    {`"${meaning.example.capitalize()}."`}
                  </div>
                )}
                {meaning.synonyms && (
                  <div className="synonym">
                    <b>Synonyms: </b>
                    {meaning.synonyms.map((synonym) => `${synonym} · `)}
                  </div>
                )}
                <hr />
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;
