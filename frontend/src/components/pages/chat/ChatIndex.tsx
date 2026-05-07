"use client";

import { Badge, Button, Card, Grid, Group, Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export default function ChatIndex() {
  return (
    <div>
      <h3
        className="font-bold text-2xl mb-10 mt-3
      "
      >
        Chat
      </h3>
      <div className="grid grid-cols-8 gap-4">
        <Card className="col-span-2 flex">
          <Grid align="center" justify="space-between" className="">
            <div className="flex items-center gap-3">
              <p className="font-semibold text-xl"> Conversation</p>
              <Badge > 10</Badge >
            </div>
            <Button variant="transparent">
              <IconSearch />
            </Button>
          </Grid>
        </Card>
        <Card className="col-span-6"></Card>
      </div>
    </div>
  );
}
