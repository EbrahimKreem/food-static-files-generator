// trying to separate code from generate Array.
// but we'll move them out soon.
// @TODO can we replace it with alias?
import { readAllFiles } from './utils'
// const utils = require('./utils');
// import utils from ('./utils')
import PATH from 'path';

// Without files it wouldn't work without files... - Answer yes, I will fix it PS. Vadim :)
var files = "";

const setupPathMeasurements = pathToSrc => {
  if (files !== undefined) {
    files = require(pathToSrc + '/files');
  }else {
    console.error("Error of setupPathMeasurements(): var files is undefined");
    
  }
};
// @TODO this is a method from a project. maybe we should move it there, because it's confusing right now
function getMeasurementSystem() {
  const result = [];
  const measurementSystemId = generateArrWithId(
    files.measurementSystem,
    'id',
  );

  _.map(measurementSystemId, (system) => {
    result.push({
      id: system.id,
      alias: system.alias,
      title: _.capitalize(system.alias),
    });
  });
  return result;
}


// @TODO this is a method from a project. maybe we should move it there, because it's confusing right now
const getMeasurementUnits = () => {
  if (files !== undefined) {
    const dirMeasurementUnits = PATH.parse(files.measurementUnits).dir;
    let measurementUnitsList = readAllFiles(dirMeasurementUnits)[1];

    const result = [];

    measurementUnitsList = generateArrWithId(
      measurementUnitsList,
      'id',
    );
    measurementUnitsList = generateArrWithId(
      measurementUnitsList,
      'system_id',
    );

    _.map(measurementUnitsList, (unit) => {
      result.push({
        id: unit.id,
        system_id: unit.system_id,
        type: unit.type,
        name: unit.name,
        singular: unit.singular,
        plural: unit.plural,
        short: unit.short,
        pattern: unit.pattern,
        error: 'null',
      });
    });

    return result;
  } else {
    console.error("Error: variable files is undefined");

  }

}

export {
  setupPathMeasurements,
  getMeasurementSystem,
  getMeasurementUnits,
};
