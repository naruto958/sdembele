import Vuex from 'vuex';

const createStore = () =>{
    return new Vuex.Store({
        state:{
            youtubePosts: [
                {
                  id: '1',
                  title: 'first loaded post',
                  previewText: 'this is the preview text',
                  thumbnail: '//unsplash.it/300/400'
                },
                {
                  id: '2',
                  title: 'second loaded post',
                  previewText: 'this is the preview text',
                  thumbnail: '//unsplash.it/300/400'
                }
              ],
              blogPosts: [
                {
                  id: '1',
                  title: 'first loaded post',
                  previewText: 'this is the preview text',
                  thumbnail: '//unsplash.it/300/400'
                },
                {
                  id: '2',
                  title: 'second loaded post',
                  previewText: 'this is the preview text',
                  thumbnail: '//unsplash.it/300/400'
                }
              ],
              projectPosts: [
                {
                  id: '1',
                  category: 'frontent',
                  title: 'first loaded post',
                  previewText: 'this is the preview text',
                  thumbnail: '//unsplash.it/300/400'
                },
                {
                id: '2',
                category: 'frontent',
                title: 'first loaded post',
                previewText: 'this is the preview text',
                thumbnail: '//unsplash.it/300/400'
                },
                {
                id: '3',
                category: 'frontent',
                title: 'first loaded post',
                previewText: 'this is the preview text',
                thumbnail: '//unsplash.it/300/400'
                }
              ]
        },
        mutations:{},
        getters:{},
        actions:{}
    });
}
export default createStore
