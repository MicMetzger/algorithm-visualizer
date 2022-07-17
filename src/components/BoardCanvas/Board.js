import * as React                                from 'react';
import {Canvas, useFrame /*useFrame*/}           from 'react-three-fiber';
import Controls                                  from './OrbitControls';
import Cell                                      from './Cells';
import {useImperativeHandle, useRef, forwardRef} from 'react';
import {TrackballControls}                       from 'three/examples/jsm/controls/TrackballControls';
import OrbitControls                             from './OrbitControls';
// import create                                    from 'zustand';


export const Board = ({board, layoutType, selectedPoint, onSelectPoint, mazeType}, ref) => {
  const controlsRef = useRef(OrbitControls);


  useImperativeHandle(ref, () => ({
    resetCamera: () => {
      return controlsRef.current.resetCamera();
    },

    generateMaze: (Strategy) => {
      // return useGenerateMaze({board, layoutType, selectedPoint, onSelectPoint}, Strategy);
    },
  }));


  return (
      <Canvas className = "board" camera = {{position: [0, 0, 80], far: 1000}}>
        {/*<PerspectiveCamera position={[2, 2, 2]} makeDefault />*/}
        <Controls ref = {controlsRef} selectedPoint = {selectedPoint}/>
        {/* <instancedMesh> */}
        <mesh>  {/* BorderBox */}
          {(layoutType === 'standard') ?
           <boxBufferGeometry attach = "geometry" args = {[110, 110, -10]}/>
                                       :
           <boxBufferGeometry attach = "geometry" args = {[150, 150, -10]}/>
          }
          <meshBasicMaterial attach = "material" color = "black"/>
        </mesh>


        <ambientLight color = "white" intensity = {0.1}/>
        <hemisphereLight
            color = "#ffffff"
            skyColor = "#ffffbb"
            groundColor = "#080820"
            intensity = {1.0}
        />
        <Cell
            board = {board}
            layoutType = {layoutType}
            mazeType = {mazeType}
            selectedPoint = {selectedPoint}
            onSelectPoint = {onSelectPoint}
        />
        {/*<Effects />*/}
      </Canvas>
  );
};

export default forwardRef(Board);