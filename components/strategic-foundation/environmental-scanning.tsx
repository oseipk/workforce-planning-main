// components/strategic-foundation/environmental-scanning.tsx
'use client';

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEnvironmental } from '@/context/EnvironmentalContext';

const mockSummarize = (title: string) =>
  `Summary: "${title}" suggests an ongoing trend relevant to workforce planning. Keep monitoring this development.`;

const EnvironmentalScanning = () => {
  const [keyword, setKeyword] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [loading, setLoading] = useState(false);
  const { setArticles, articles } = useEnvironmental();

  const fetchArticles = async () => {
    setLoading(true);

    try {
      let query = `https://newsdata.io/api/1/news?apikey=pub_4e532e1ea54a46d982048f92ae17a00f&q=${keyword}&language=en`;
      if (startDate) query += `&from_date=${startDate}`;
      if (endDate) query += `&to_date=${endDate}`;

      const response = await fetch(query);
      const data = await response.json();

      console.log("API response:", data); // 🔍 Log the response

      if (!Array.isArray(data.results)) {
        console.error("Unexpected data format:", data);
        setArticles([]);
      } else {
        const processed = data.results.slice(0, 5).map((item: any) => ({
          title: item.title,
          url: item.link || item.url || "#",
          summary: mockSummarize(item.title),
          pubDate: item.pubDate || "Unknown date"
        }));

        setArticles(processed);
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
      setArticles([]);
    }

    setLoading(false);
  };

  return (
    <div className="space-y-4 p-4">
      <h2 className="text-xl font-bold">🌍 Environmental Scanning</h2>
      <p className="text-sm text-muted-foreground">Scan news for external workforce trends.</p>

      <div className="flex flex-wrap gap-2">
        <Input
          type="text"
          placeholder="e.g., AI skills demand"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <Input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <Button onClick={fetchArticles} disabled={!keyword || loading}>
          {loading ? "Scanning..." : "Scan"}
        </Button>
      </div>

      {articles.length > 0 ? (
        <div className="grid gap-4">
          {articles.map((article, i) => (
            <Card key={i}>
              <CardContent className="space-y-2 p-4">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  {article.title}
                </a>
                <p className="text-sm text-muted-foreground">{article.pubDate}</p>
                <p className="text-sm">{article.summary}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : !loading && (
        <p className="text-sm text-muted-foreground">No articles found. Try different keywords or dates.</p>
      )}
    </div>
  );
};

export default EnvironmentalScanning;
