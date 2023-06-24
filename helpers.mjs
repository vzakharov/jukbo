function removeProjectNamePrefix( projectName ) {
  return function( sampleNameWithProjectPrefix ) {
    return sampleNameWithProjectPrefix.replace( new RegExp( `^${projectName}-` ), '' );
  }
};

export function getSampleNamesFromResponse({ project, response: { data } }) {
  const samplesData = data[8];
  const sampleNames = samplesData.choices.map( removeProjectNamePrefix( project ) );
  return sampleNames;
};

export function getCurrentSampleNameFromResponse({ project, response: { data } }) {
  const samplesData = data[8];
  const currentSampleName = removeProjectNamePrefix( project )( samplesData.value );
  return currentSampleName;
};