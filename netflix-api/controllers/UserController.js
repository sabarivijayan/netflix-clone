const User = require("../models/UserModel");

module.exports.addToLikedMovies = async (req,res) => {
    try{
        const { email,data } = req.body;
        const user = await User.findOne({email});
        if(user){
            const {likedMovies} = user;
            const movieAlreadyLiked = likedMovies.find(({id}) => (id ===data.id));
            if(!movieAlreadyLiked){
                await User.findByIdAndUpdate(
                    user._id,
                    {
                        likedMovies: [...user.likedMovies, data],
                    },
                    {new: true},
                );
            }else{
                return res.json({
                    message: "Movie already added to the liked list"
                });
            }
        }else{
            await User.create({email, likedMovies: [data]});
        }
        return res.json({message:"Movie added successfully"});

    }catch(error){
        return res.json({
            message:"Error adding movies..."
        });
    }
};

module.exports.getLikedMovies = async(req, res) => {
    try{
        const {email} = req.params;
        const user = await User.findOne({email});
        if(user){
            return res.json ({
                message:"Success", movies: user.likedMovies 
            });
        }else{
            return res.json({
                message: "User with given email not found"
            })
        }
    }catch(error){
        return res.json({
            message: "Error fetching movies"
        });
    }
};

module.exports.removeFromLikedMovies = async (req,res) => {
    try{
        const { email,movieId } = req.body;
        const user = await User.findOne({email});
        if(user){
            const {likedMovies} = user;
            const movieIndex = likedMovies.findIndex(({id}) => id===movieId);
            if(!movieIndex) throw new Error({message:"Movie not found"});
            likedMovies.splice(movieIndex,1);
            await User.findByIdAndUpdate(
                user._id,
                {
                    likedMovies,
                },
                {new: true},
            );
            return res.json({message: "Movie deleted", movies: likedMovies});
        }
    }catch(error){
        return res.json({
            message: "Error deleting movies"
        });
    }
};