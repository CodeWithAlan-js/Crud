import moovieModel from "../models/moovieModel.js";

export const addMoovie = async (req, res) => {
  const moovie = moovieModel(req.body);
  await moovie.save();
  res.send(moovie);
};

export const getMoovies = async (_, res) => {
  const moovies = await moovieModel.find();
  res.send(moovies);
};

export const deleteMoovie = async (req, res) => {
  await moovieModel.findByIdAndDelete(req.params.id);
  res.send("Moovie deleted");
};

export const getMoovie = async (req, res) => {
  const moovie = await moovieModel.findById(req.params.id);
  res.send(moovie);
};

export const updateMoovie = async (req, res) => {
  const moovie = await moovieModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send(moovie);
};
