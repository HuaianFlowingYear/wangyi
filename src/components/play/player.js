import { Howl, Howler, } from "howler";
import { getTrackUrl, getTrackDetail } from "@/service"
let timer = null;
// Howl加载音乐 播放暂停
// Howler  全局设置声音大小
// 播放器的功能
// 定义一个属性保存播放歌单
// 定义一个方法替换播放列表
export default class {
    constructor() {
        // 播放器的播放状态
        this.playing = false;
        // 歌曲的总时长
        this.duration = 0;
        // 歌曲的播放进度
        this.progress = 0;
        this.index = 0
        this.tracks = []
            // 0代表列表循环 1代表单曲循环
        this.loopMode = 0
        this.currentTrackDetail = {};
        this.howl = null

    }

    // 实时更新播放进度
    interval() {
        clearInterval(timer);
        timer = setTimeout(() => {
            this.progress = this.howl.seek() / this.howl.duration();
        }, 1000);
    }

    // 存放播放列表
    replaceTracks(tracks, autoplayTrack) {
        this.tracks = tracks
        this.howl = null; // 初始化为null
        // if (autoplay) return 
        // 指定从autoplayTrack开始播放
        if (autoplayTrack) {
            this.index = this.tracks.indexOf(autoplayTrack)
        }
        this.playTrack(this.tracks[this.index])
    }



    async playTrack(track) {
        const [getTrackUrlError, response] = await getTrackUrl(track)
        const [getTrackDetailError, res] = await getTrackDetail(track);
        if (getTrackUrlError) return console.log('获取MP3 url异常');
        if (getTrackDetailError) return console.log('获取歌曲详情异常');
        const mp3Url = response.data.data[0].url;
        this.currentTrackDetail = res.data.songs[0];
        console.log('currentTrackDetail', this.currentTrackDetail);
        if (mp3Url) return this.mountAudioSource(mp3Url, true)
        this.playNextTrack();

    }

    mountAudioSource(url, autoplay = false) {
        Howler.unload()
        this.howl = new Howl({
            src: [url],
            html5: true,
            format: ["mp3"],
        });
        if (autoplay) this.play()
        this.howl.on("end", () => this.getNextTrack())
    }

    play() {
        this.playing = true;
        this.duration = this.howl.duration();
        this.interval()
        this.howl.play()
    }

    pause() {
        this.playing = false;
        this.howl.pause()
    }

    toggle() {
        this.howl.playing() ? this.pause() : this.play()
    }


    // 获取需要播放的trackid
    playNextTrack() {
            const nextTrack = this.getNextTrack()
            this.playTrack(nextTrack)
        }
        // 判断播放状态如果列表循环最后一首点下一曲切换第一首单曲循环播放当前歌曲
    getNextTrack() {
        if (this.loopMode == 1) return this.tracks[this.index]
        const currentTrackIsLast = this.index + 1 == this.tracks.length
        if (currentTrackIsLast && this.loopMode == 0) return this.tracks[this.index = 0]
        return this.tracks[++this.index]
    }

    playPreviousTrack() {
        const previousTrack = this.getPreviousTrack();
        this.playTrack(previousTrack);
    }

    getPreviousTrack() {
        const currentTrackIsFirst = this.index === 0;
        if (currentTrackIsFirst && this.loopMode === 0) {
            return this.tracks[this.tracks.length - 1];
        }
        return this.tracks[--this.index];
    }
}