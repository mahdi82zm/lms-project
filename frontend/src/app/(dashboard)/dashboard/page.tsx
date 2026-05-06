import { Title, Text, Card, SimpleGrid } from '@mantine/core';

export default function DashboardPage() {
  return (
    <div>
      <Title order={1} mb="lg">خوش آمدید</Title>
      
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Text fw={500}>کارت ۱</Text>
          <Text size="sm" c="dimmed">محتوای کارت</Text>
        </Card>
        
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Text fw={500}>کارت ۲</Text>
          <Text size="sm" c="dimmed">محتوای کارت</Text>
        </Card>
        
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Text fw={500}>کارت ۳</Text>
          <Text size="sm" c="dimmed">محتوای کارت</Text>
        </Card>
      </SimpleGrid>
    </div>
  );
}
