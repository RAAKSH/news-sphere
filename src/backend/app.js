import express from 'express';
import sqlite from 'better-sqlite3';
import cors from 'cors';

const DUMMY_NEWS = [
  {
    id: 'n1',
    slug: 'will-ai-replace-humans',
    title: 'Will AI Replace Humans?',
    image: 'ai-robot.jpg',
    date: '2021-07-01',
    content:
      'Since late 2022 AI is on the rise and therefore many people worry whether AI will replace humans. The answer is not that simple. AI is a tool that can be used to automate tasks, but it can also be used to augment human capabilities. The future is not set in stone, but it is clear that AI will play a big role in the future. The question is how we will use it.',
  },
  {
    id: 'n2',
    slug: 'beaver-plague',
    title: 'A Plague of Beavers',
    image: 'beaver.jpg',
    date: '2022-05-01',
    content: 'Beavers are taking over the world. They are building dams everywhere and flooding entire cities. What can we do to stop them?',
  },
  {
    id: 'n3',
    slug: 'couple-cooking',
    title: 'Spend more time together!',
    image: 'couple-cooking.jpg',
    date: '2024-03-01',
    content: 'Cooking together is a great way to spend more time with your partner. It is fun and you get to eat something delicious afterwards. What are you waiting for? Get cooking!',
  },
  {
    id: 'n4',
    slug: 'hiking',
    title: 'Hiking is the best!',
    image: 'hiking.jpg',
    date: '2024-01-01',
    content: 'Hiking is a great way to get some exercise and enjoy the great outdoors. It is also a great way to clear your mind and reduce stress. So what are you waiting for? Get out there and start hiking!',
  },
  {
    id: 'n5',
    slug: 'landscape',
    title: 'The beauty of landscape',
    image: 'landscape.jpg',
    date: '2022-07-01',
    content: 'Landscape photography is a great way to capture the beauty of nature. It is also a great way to get outside and enjoy the great outdoors. So what are you waiting for? Get out there and start taking some pictures!',
  },
  {
      id: 'n6',
      slug: 'tech-trends-2025',
      title: 'Top Tech Trends to Watch in 2025',
      image: 'tech-trends.jpg',
      date: '2025-01-15',
      content: 'From quantum computing to AI-powered everything, here are the top tech trends shaping the future...',
    },
    {
      id: 'n7',
      slug: 'urban-gardening',
      title: 'Urban Gardening Is on the Rise',
      image: 'urban-gardening.jpg',
      date: '2023-06-11',
      content: 'With more people living in cities, urban gardening offers a sustainable way to grow your own food...',
    },
    {
      id: 'n8',
      slug: 'space-tourism-boom',
      title: 'The Space Tourism Boom',
      image: 'space-tourists.jpg',
      date: '2024-11-01',
      content: 'Space tourism is becoming a reality with companies like SpaceX and Blue Origin offering suborbital trips...',
    },
    {
      id: 'n9',
      slug: 'climate-hope',
      title: 'Signs of Hope in the Climate Crisis',
      image: 'climate-change.jpg',
      date: '2023-08-25',
      content: 'While challenges remain, global efforts are showing progress toward sustainability and reduced emissions...',
    },
    {
      id: 'n10',
      slug: 'remote-work-future',
      title: 'The Future of Remote Work',
      image: 'remote-work.jpg',
      date: '2024-04-10',
      content: 'Remote work isn’t going away. Companies and employees are embracing new hybrid models and digital workflows...',
    },
    {
      id: 'n11',
      slug: 'smart-cities-innovation',
      title: 'Smart Cities: Innovation for the Future',
      image: 'smart-city.jpg',
      date: '2025-05-20',
      content: 'Smart cities use technology to improve infrastructure, energy use, and connectivity. Urban areas are becoming more efficient, cleaner, and smarter thanks to IoT and AI.'
    },
    {
      id: 'n12',
      slug: 'vr-in-education',
      title: 'How VR Is Changing Education',
      image: 'vr-education.jpg',
      date: '2024-09-14',
      content: 'Virtual reality is making classrooms more immersive and engaging. Students can now explore historical events and complex science concepts in 3D environments.'
    },
    {
      id: 'n13',
      slug: 'drones-deliveries',
      title: 'Drones Are the New Delivery Boys',
      image: 'drone-delivery.jpg',
      date: '2023-11-30',
      content: 'Delivery by drone is becoming more common, especially in remote areas. Companies are racing to develop faster, safer, and eco-friendly drone logistics.'
    },
    {
      id: 'n14',
      slug: 'ai-healthcare-revolution',
      title: 'AI Is Transforming Healthcare',
      image: 'ai-healthcare.jpg',
      date: '2024-07-12',
      content: 'Artificial intelligence is improving diagnostics, treatment plans, and even patient monitoring. The healthcare industry is on the verge of an AI-powered transformation.'
    },
    {
      id: 'n15',
      slug: 'digital-detox',
      title: 'The Rise of Digital Detox Retreats',
      image: 'digital-detox.jpg',
      date: '2023-03-18',
      content: 'As screen time soars, people are turning to digital detox retreats to recharge. These retreats help people disconnect and focus on real-world connections and mindfulness.'
    }
];

const db = sqlite('data.db');

function initDb() {
  db.prepare(
    'CREATE TABLE IF NOT EXISTS news (id INTEGER PRIMARY KEY, slug TEXT UNIQUE, title TEXT, content TEXT, date TEXT, image TEXT)'
  ).run();

  const { count } = db.prepare('SELECT COUNT(*) as count FROM news').get();

  if (count === 0) {
    const insert = db.prepare(
      'INSERT INTO news (slug, title, content, date, image) VALUES (?, ?, ?, ?, ?)'
    );

    DUMMY_NEWS.forEach((news) => {
      insert.run(news.slug, news.title, news.content, news.date, news.image);
    });
  }
}

const app = express();

app.use(cors())

app.get('/news', (req, res) => {
  const news = db.prepare('SELECT * FROM news').all();
  res.json(news);
});

initDb();

app.listen(8080);
