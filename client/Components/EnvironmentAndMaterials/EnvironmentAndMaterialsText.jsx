import React from 'react';

const EnvironmentAndMaterialsText = props => {
  if (props.environmentAndMaterials) {
    let EnvAndMatArray = props.environmentAndMaterials.split('\n');
    return (
      <div className="aw_env_materials">
        {EnvAndMatArray.map((line, i) => {
          if (line == 'Environment' || line == 'Materials') {
            return (
              <div className="aw_drop_down_text bold" key={'environment' + i}>
                {line}
              </div>
            );
          } else if (line === '') {
            return (
              <div className="hidden" key={'environment' + i}>
                hiddenline
              </div>
            );
          } else {
            return (
              <div className="aw_drop_down_text" key={'environment' + i}>
                {line}
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    return <div className="aw_drop_down_text aw_drop_down_container">Not Available</div>;
  }
};

export default EnvironmentAndMaterialsText;
