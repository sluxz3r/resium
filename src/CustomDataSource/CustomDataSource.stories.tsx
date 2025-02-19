import React from "react";
import { Cartesian3, Color, EntityCluster } from "cesium";
import { Meta, Story } from "@storybook/react";

import Viewer from "../Viewer";
import CustomDataSource, { CustomDataSourceProps } from "./CustomDataSource";
import Entity from "../Entity";
import { events } from "../core/storybook";

export default {
  title: "CustomDataSource",
  component: CustomDataSource,
} as Meta;

export const Basic: Story<CustomDataSourceProps> = args => (
  <Viewer full>
    <CustomDataSource {...args} name="custom" {...events}>
      <Entity
        name="added to custom data source"
        description="test"
        position={Cartesian3.fromDegrees(-74.0707383, 41.7117244, 100)}
        point={{ pixelSize: 10, color: Color.RED }}
      />
    </CustomDataSource>
    <CustomDataSource name="hidden" show={false} {...events}>
      <Entity
        name="added to custom data source but hidden"
        description="test"
        position={Cartesian3.fromDegrees(-74.0707383, 39.7117244, 100)}
        point={{ pixelSize: 10, color: Color.YELLOW }}
      />
    </CustomDataSource>
    <Entity
      name="added to default data source"
      description="test"
      position={Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)}
      point={{ pixelSize: 10 }}
    />
  </Viewer>
);

export const UseEntityCluster: Story<CustomDataSourceProps> = args => (
  <Viewer full>
    <CustomDataSource
      {...args}
      {...events}
      clustering={
        new EntityCluster({
          enabled: true,
          pixelRange: 50,
          minimumClusterSize: 3,
          clusterPoints: true,
        })
      }>
      {new Array(100).fill(0).map((_, i) => (
        <Entity
          key={i}
          position={Cartesian3.fromDegrees(
            Math.random() * 180 - 90,
            Math.random() * 360 - 180,
            100,
          )}
          point={{ pixelSize: 10, color: Color.RED }}
        />
      ))}
    </CustomDataSource>
  </Viewer>
);

UseEntityCluster.storyName = "Entity cluster";
