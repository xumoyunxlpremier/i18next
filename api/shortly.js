// api/shortly.js
export default async function handler(req, res) {
  const { lang = "uz" } = req.query;

  try {
    const response = await fetch(
      `https://json-api.uz/api/project/shortly/${lang}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`API returned ${response.status}`);
    }

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({
      error: "Failed to fetch data",
      message: error.message,
    });
  }
}
