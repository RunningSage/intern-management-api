const Intern = require("../models/intern");

exports.createIntern = async (req, res) => {
  try {
    const intern = new Intern(req.body);
    await intern.save();
    res.status(201).json(intern);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.getInterns = async (req, res) => {
  try {
    const {
      department,
      status,
      sortBy = "name",
      order = "asc",
      page = 1,
      limit = 10,
    } = req.query;

    const query = {};
    if (department) query.department = department;
    if (status) query.status = status;

    const interns = await Intern.find(query)
      .sort({ [sortBy]: order === "asc" ? 1 : -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const totalInterns = await Intern.countDocuments(query);

    res.status(200).json({
      success: true,
      data: interns,
      total: totalInterns,
      page: parseInt(page),
      totalPages: Math.ceil(totalInterns / limit),
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getInternById = async (req, res) => {
  try {
    const intern = await Intern.findById(req.params.id);
    if (!intern) return res.status(404).json({ msg: "Intern not found" });
    res.json(intern);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.updateIntern = async (req, res) => {
  try {
    const intern = await Intern.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!intern) return res.status(404).json({ msg: "Intern not found" });
    res.json(intern);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.deleteIntern = async (req, res) => {
  try {
    const intern = await Intern.findByIdAndDelete(req.params.id);
    if (!intern) return res.status(404).json({ msg: "Intern not found" });
    res.json({ msg: "Intern removed" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
