const addWeight = async (req, res) => {
  try {
    const { weight } = req.body;

    res.status(201).json({
      success: true,
      message: "Weight added successfully",
      progress: {
        _id: "progress-demo-1",
        weight: weight || 70,
        createdAt: new Date(),
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getProgress = async (req, res) => {
  try {
    const history = [
      {
        _id: "1",
        weight: 70,
        createdAt: "2026-07-01",
      },
      {
        _id: "2",
        weight: 69,
        createdAt: "2026-07-08",
      },
      {
        _id: "3",
        weight: 68,
        createdAt: "2026-07-15",
      },
    ];

    res.status(200).json({
      success: true,
      totalEntries: history.length,
      totalChange: -2,
      history,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addWeight,
  getProgress,
};