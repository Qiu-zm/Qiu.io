'use strict';

function v(f, a, b, d) {
    f.A.oc(f.ab, a, b, d, void 0)
}

function D(f, a, b, d) {
    f.A.ca ? v(f, a, b, d) : f.A.hf()._OnMessageFromDOM({
        type: "event",
        component: f.ab,
        handler: a,
        dispatchOpts: d || null,
        data: b,
        responseId: null
    })
}

function I(f, a, b) {
    f.A.C(f.ab, a, b)
}

function K(f, a) {
    for (const [b, d] of a) I(f, b, d)
}

function L(f) {
    f.Rb || (f.A.Te(f.de), f.Rb = !0)
}
window.Ca = class {
    constructor(f, a) {
        this.A = f;
        this.ab = a;
        this.Rb = !1;
        this.de = () => this.ua()
    }
    hd() { }
    ua() { }
};

function N(f) {
    -1 !== f.Qa && (self.clearTimeout(f.Qa), f.Qa = -1)
}
window.Ke = class {
    constructor(f, a) {
        this.Nc = f;
        this.vg = a;
        this.Qa = -1;
        this.Sb = -Infinity;
        this.ee = () => {
            this.Qa = -1;
            this.Sb = Date.now();
            this.gb = !0;
            this.Nc();
            this.gb = !1
        };
        this.Md = this.gb = !1
    }
    c() {
        N(this);
        this.ee = this.Nc = null
    }
};
"use strict";

function O(f, a) {
    I(f, "get-element", b => {
        const d = f.ba.get(b.elementId);
        return a(d, b)
    })
}
window.Qg = class extends self.Ca {
    constructor(f, a) {
        super(f, a);
        this.ba = new Map;
        this.Mc = !0;
        K(this, [
            ["create", () => {
                throw Error("required override");
            }],
            ["destroy", b => {
                {
                    b = b.elementId;
                    const d = this.ba.get(b);
                    this.Mc && d.parentElement.removeChild(d);
                    this.ba.delete(b)
                }
            }],
            ["set-visible", b => {
                this.Mc && (this.ba.get(b.elementId).style.display = b.isVisible ? "" : "none")
            }],
            ["update-position", b => {
                if (this.Mc) {
                    var d = this.ba.get(b.elementId);
                    d.style.left = b.left + "px";
                    d.style.top = b.top + "px";
                    d.style.width = b.width + "px";
                    d.style.height =
                        b.height + "px";
                    b = b.fontSize;
                    null !== b && (d.style.fontSize = b + "em")
                }
            }],
            ["update-state", b => {
                this.ba.get(b.elementId);
                throw Error("required override");
            }],
            ["focus", b => this.Gc(b)],
            ["set-css-style", b => {
                this.ba.get(b.elementId).style[b.prop] = b.val
            }],
            ["set-attribute", b => {
                this.ba.get(b.elementId).setAttribute(b.name, b.val)
            }],
            ["remove-attribute", b => {
                this.ba.get(b.elementId).removeAttribute(b.name)
            }]
        ]);
        O(this, b => b)
    }
    Gc(f) {
        var a = this.ba.get(f.elementId);
        f.focus ? a.focus() : a.blur()
    }
};
"use strict"; {
    const f = /(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent);
    let a = 0;

    function b(m) {
        const c = document.createElement("script");
        c.async = !1;
        c.type = "module";
        return m.Gg ? new Promise(k => {
            const l = "c3_resolve_" + a;
            ++a;
            self[l] = k;
            c.textContent = m.Kg + `\n\nself["${l}"]();`;
            document.head.appendChild(c)
        }) : new Promise((k, l) => {
            c.onload = k;
            c.onerror = l;
            c.src = m;
            document.head.appendChild(c)
        })
    }
    let d = !1,
        g = !1;

    function n() {
        if (!d) {
            try {
                new Worker("blob://", {
                    get type() {
                        g = !0
                    }
                })
            } catch (m) { }
            d = !0
        }
        return g
    }
    const q =
        /safari\//i.test(navigator.userAgent) && !/chrome\/|chromium\/|edg\//i.test(navigator.userAgent);
    let w = new Audio;
    const B = {
        "audio/webm; codecs=opus": !!w.canPlayType("audio/webm; codecs=opus") && !q,
        "audio/ogg; codecs=opus": !!w.canPlayType("audio/ogg; codecs=opus"),
        "audio/webm; codecs=vorbis": !!w.canPlayType("audio/webm; codecs=vorbis"),
        "audio/ogg; codecs=vorbis": !!w.canPlayType("audio/ogg; codecs=vorbis"),
        "audio/mp4": !!w.canPlayType("audio/mp4"),
        "audio/mpeg": !!w.canPlayType("audio/mpeg")
    };
    w = null;
    async function E(m) {
        m =
            await x(m);
        return (new TextDecoder("utf-8")).decode(m)
    }

    function x(m) {
        return new Promise((c, k) => {
            const l = new FileReader;
            l.onload = p => c(p.target.result);
            l.onerror = p => k(p);
            l.readAsArrayBuffer(m)
        })
    }
    const y = [];
    let C = 0;
    window.RealFile = window.File;
    const F = [],
        A = new Map,
        G = new Map;
    let J = 0;
    const M = [];
    self.runOnStartup = function (m) {
        if ("function" !== typeof m) throw Error("runOnStartup called without a function");
        M.push(m)
    };
    const e = new Set(["cordova", "playable-ad", "instant-games"]);
    let h = !1;
    window.ma = class m {
        constructor(c) {
            this.ca =
                c.Mg;
            this.pa = null;
            this.F = "";
            this.bc = c.Jg;
            this.vb = {};
            this.Ja = this.ub = null;
            this.Pb = [];
            this.jb = this.K = this.Oa = null;
            this.Na = -1;
            this.Ag = () => this.Gf();
            this.Ma = [];
            this.s = c.fe;
            this.hb = "file" === location.protocol.substr(0, 4);
            !this.ca || "undefined" !== typeof OffscreenCanvas && navigator.userActivation && n() || (this
                .ca = !1);
            if ("playable-ad" === this.s || "instant-games" === this.s) this.ca = !1;
            if ("cordova" === this.s && this.ca)
                if (/android/i.test(navigator.userAgent)) {
                    const k = /Chrome\/(\d+)/i.exec(navigator.userAgent);
                    k && 90 <= parseInt(k[1],
                        10) || (this.ca = !1)
                } else this.ca = !1;
            this.Ub = this.ha = null;
            "html5" !== this.s && "playable-ad" !== this.s || !this.hb || alert(
                "Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)"
            );
            this.C("runtime", "cordova-fetch-local-file", k => this.qf(k));
            this.C("runtime", "create-job-worker", () => this.rf());
            "cordova" === this.s ? document.addEventListener("deviceready", () => this.zd(c)) : this.zd(c)
        }
        c() {
            this.uc();
            this.pa && (this.pa = this.pa.onmessage =
                null);
            this.ub && (this.ub.terminate(), this.ub = null);
            this.Ja && (this.Ja.c(), this.Ja = null);
            this.K && (this.K.parentElement.removeChild(this.K), this.K = null)
        }
        Fe() {
            return f && "cordova" === this.s
        }
        nc() {
            const c = navigator.userAgent;
            return f && e.has(this.s) || navigator.standalone || /crios\/|fxios\/|edgios\//i.test(c)
        }
        async zd(c) {
            "macos-wkwebview" === this.s && this.Kc({
                type: "ready"
            });
            if ("playable-ad" === this.s) {
                this.ha = self.c3_base64files;
                this.Ub = {};
                await this.Ye();
                for (let l = 0, p = c.Ra.length; l < p; ++l) {
                    var k = c.Ra[l].toLowerCase();
                    this.Ub.hasOwnProperty(k) ? c.Ra[l] = {
                        Gg: !0,
                        Kg: this.Ub[k]
                    } : this.ha.hasOwnProperty(k) && (c.Ra[l] = URL.createObjectURL(this.ha[k]))
                }
            }
            c.Bg ? this.F = c.Bg : (k = location.origin, this.F = ("null" === k ? "file:///" : k) + location
                .pathname, k = this.F.lastIndexOf("/"), -1 !== k && (this.F = this.F.substr(0, k + 1)));
            c.Og && (this.vb = c.Og);
            k = new MessageChannel;
            this.pa = k.port1;
            this.pa.onmessage = l => this._OnMessageFromRuntime(l.data);
            window.c3_addPortMessageHandler && window.c3_addPortMessageHandler(l => this.Cf(l));
            this.jb = new self.Ge(this);
            await P(this.jb);
            "object" === typeof window.StatusBar && window.StatusBar.hide();
            "object" === typeof window.AndroidFullScreen && window.AndroidFullScreen.immersiveMode();
            this.ca ? await this.kf(c, k.port2) : await this.jf(c, k.port2)
        }
        xc(c) {
            c = this.vb.hasOwnProperty(c) ? this.vb[c] : c.endsWith("/workermain.js") && this.vb
                .hasOwnProperty("workermain.js") ? this.vb["workermain.js"] : "playable-ad" === this.s && this
                    .ha.hasOwnProperty(c.toLowerCase()) ? this.ha[c.toLowerCase()] : c;
            c instanceof Blob && (c = URL.createObjectURL(c));
            return c
        }
        async hc(c, k,
            l) {
            if (c.startsWith("blob:")) return new Worker(c, l);
            if ("cordova" === this.s && this.hb) return c = await this.wb(l.Fg ? c : this.bc + c), new Worker(
                URL.createObjectURL(new Blob([c], {
                    type: "application/javascript"
                })), l);
            c = new URL(c, k);
            if (location.origin !== c.origin) {
                c = await fetch(c);
                if (!c.ok) throw Error("failed to fetch worker script");
                c = await c.blob();
                return new Worker(URL.createObjectURL(c), l)
            }
            return new Worker(c, l)
        }
        xa() {
            return Math.max(window.innerWidth, 1)
        }
        wa() {
            return Math.max(window.innerHeight, 1)
        }
        yd(c) {
            var k =
                this.jb;
            return {
                baseUrl: this.F,
                windowInnerWidth: this.xa(),
                windowInnerHeight: this.wa(),
                devicePixelRatio: window.devicePixelRatio,
                isFullscreen: m.Va(),
                projectData: c.Vg,
                previewImageBlobs: window.cr_previewImageBlobs || this.ha,
                previewProjectFileBlobs: window.cr_previewProjectFileBlobs,
                previewProjectFileSWUrls: window.cr_previewProjectFiles,
                swClientId: window.Tg || "",
                exportType: c.fe,
                isDebug: -1 < self.location.search.indexOf("debug"),
                ife: !!self.Ug,
                jobScheduler: {
                    inputPort: k.Tc,
                    outputPort: k.ad,
                    maxNumWorkers: k.xg
                },
                supportedAudioFormats: B,
                opusWasmScriptUrl: window.cr_opusWasmScriptUrl || this.bc + "opus.wasm.js",
                opusWasmBinaryUrl: window.cr_opusWasmBinaryUrl || this.bc + "opus.wasm.wasm",
                isFileProtocol: this.hb,
                isiOSCordova: this.Fe(),
                isiOSWebView: this.nc(),
                isFBInstantAvailable: "undefined" !== typeof self.FBInstant
            }
        }
        async kf(c, k) {
            var l = this.xc(c.Ng);
            this.ub = await this.hc(l, this.F, {
                type: "module",
                name: "Runtime",
                Fg: !0
            });
            this.K = document.createElement("canvas");
            this.K.style.display = "none";
            l = this.K.transferControlToOffscreen();
            document.body.appendChild(this.K);
            window.c3canvas = this.K;
            let p = c.gd || [],
                u = c.Ra;
            p = await Promise.all(p.map(r => this.Fa(r)));
            u = await Promise.all(u.map(r => this.Fa(r)));
            if ("cordova" === this.s)
                for (let r = 0, t = c.ec.length; r < t; ++r) {
                    const z = c.ec[r],
                        H = z[0];
                    if (H === c.ed || "scriptsInEvents.js" === H || H.endsWith("/scriptsInEvents.js")) z[1] =
                        await this.Fa(H)
                }
            this.ub.postMessage(Object.assign(this.yd(c), {
                type: "init-runtime",
                isInWorker: !0,
                messagePort: k,
                canvas: l,
                workerDependencyScripts: p,
                engineScripts: u,
                projectScripts: c.ec,
                mainProjectScript: c.ed,
                projectScriptsStatus: self.C3_ProjectScriptsStatus
            }),
                [k, l, ...Q(this.jb)]);
            this.Pb = F.map(r => new r(this));
            this.xd();
            self.c3_callFunction = (r, t) => this.Oa.lf(r, t);
            "preview" === this.s && (self.goToLastErrorScript = () => this.oc("runtime",
                "go-to-last-error-script"))
        }
        async jf(c, k) {
            this.K = document.createElement("canvas");
            this.K.style.display = "none";
            document.body.appendChild(this.K);
            window.c3canvas = this.K;
            this.Pb = F.map(r => new r(this));
            this.xd();
            var l = c.Ra.map(r => "string" === typeof r ? (new URL(r, this.F)).toString() : r);
            Array.isArray(c.gd) && l.unshift(...c.gd);
            l = await Promise.all(l.map(r =>
                this.Fa(r)));
            await Promise.all(l.map(r => b(r)));
            l = self.C3_ProjectScriptsStatus;
            const p = c.ed,
                u = c.ec;
            for (let [r, t] of u)
                if (t || (t = r), r === p) try {
                    t = await this.Fa(t), await b(t), "preview" !== this.s || l[r] || this.Hd(r,
                        "main script did not run to completion")
                } catch (z) {
                    this.Hd(r, z)
                } else if ("scriptsInEvents.js" === r || r.endsWith("/scriptsInEvents.js")) t = await this
                    .Fa(t), await b(t);
            "preview" === this.s && "object" !== typeof self.Pg.Rg ? (this.Ib(), console.error(
                "[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."
            ),
                alert(
                    "Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."
                )) : (c = Object.assign(this.yd(c), {
                    isInWorker: !1,
                    messagePort: k,
                    canvas: this.K,
                    runOnStartupFunctions: M
                }), this.Bd(), this.Ja = self.C3_CreateRuntime(c), await self.C3_InitRuntime(this.Ja, c))
        }
        Hd(c, k) {
            this.Ib();
            console.error(`[Preview] Failed to load project main script (${c}): `, k);
            alert(
                `Failed to load project main script (${c}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)
        }
        Bd() {
            this.Ib()
        }
        Ib() {
            const c =
                window.Cg;
            c && (c.parentElement.removeChild(c), window.Cg = null)
        }
        async rf() {
            const c = await R(this.jb);
            return {
                outputPort: c,
                transferables: [c]
            }
        }
        hf() {
            if (this.ca) throw Error("not available in worker mode");
            return this.Ja
        }
        oc(c, k, l, p, u) {
            this.pa.postMessage({
                type: "event",
                component: c,
                handler: k,
                dispatchOpts: p || null,
                data: l,
                responseId: null
            }, u)
        }
        qd(c, k, l, p, u) {
            const r = J++,
                t = new Promise((z, H) => {
                    G.set(r, {
                        resolve: z,
                        reject: H
                    })
                });
            this.pa.postMessage({
                type: "event",
                component: c,
                handler: k,
                dispatchOpts: p || null,
                data: l,
                responseId: r
            },
                u);
            return t
        } ["_OnMessageFromRuntime"](c) {
            const k = c.type;
            if ("event" === k) return this.wf(c);
            if ("result" === k) this.Jf(c);
            else if ("runtime-ready" === k) this.Kf();
            else if ("alert-error" === k) this.Ib(), alert(c.message);
            else if ("creating-runtime" === k) this.Bd();
            else throw Error(`unknown message '${k}'`);
        }
        wf(c) {
            const k = c.component,
                l = c.handler,
                p = c.data,
                u = c.responseId;
            if (c = A.get(k))
                if (c = c.get(l)) {
                    var r = null;
                    try {
                        r = c(p)
                    } catch (t) {
                        console.error(`Exception in '${k}' handler '${l}':`, t);
                        null !== u && this.Hb(u, !1, "" + t);
                        return
                    }
                    if (null ===
                        u) return r;
                    r && r.then ? r.then(t => this.Hb(u, !0, t)).catch(t => {
                        console.error(`Rejection from '${k}' handler '${l}':`, t);
                        this.Hb(u, !1, "" + t)
                    }) : this.Hb(u, !0, r)
                } else console.warn(`[DOM] No handler '${l}' for component '${k}'`);
            else console.warn(`[DOM] No event handlers for component '${k}'`)
        }
        Hb(c, k, l) {
            let p;
            l && l.transferables && (p = l.transferables);
            this.pa.postMessage({
                type: "result",
                responseId: c,
                isOk: k,
                result: l
            }, p)
        }
        Jf(c) {
            const k = c.responseId,
                l = c.isOk;
            c = c.result;
            const p = G.get(k);
            l ? p.resolve(c) : p.reject(c);
            G.delete(k)
        }
        C(c,
            k, l) {
            let p = A.get(c);
            p || (p = new Map, A.set(c, p));
            if (p.has(k)) throw Error(`[DOM] Component '${c}' already has handler '${k}'`);
            p.set(k, l)
        }
        static Sa(c) {
            if (F.includes(c)) throw Error("DOM handler already added");
            F.push(c)
        }
        xd() {
            for (const c of this.Pb)
                if ("runtime" === c.ab) {
                    this.Oa = c;
                    return
                } throw Error("cannot find runtime DOM handler");
        }
        Cf(c) {
            this.oc("debugger", "message", c)
        }
        Kf() {
            for (const c of this.Pb) c.hd()
        }
        static Va() {
            return !!(document.fullscreenElement || document.webkitFullscreenElement || document
                .mozFullScreenElement ||
                h)
        }
        static Jb(c) {
            h = !!c
        }
        Te(c) {
            this.Ma.push(c);
            this.Jc()
        }
        Wf(c) {
            c = this.Ma.indexOf(c);
            if (-1 === c) throw Error("invalid callback");
            this.Ma.splice(c, 1);
            this.Ma.length || this.uc()
        }
        Jc() {
            -1 === this.Na && this.Ma.length && (this.Na = requestAnimationFrame(this.Ag))
        }
        uc() {
            -1 !== this.Na && (cancelAnimationFrame(this.Na), this.Na = -1)
        }
        Gf() {
            this.Na = -1;
            for (const c of this.Ma) c();
            this.Jc()
        }
        va(c) {
            this.Oa.va(c)
        }
        Ea(c) {
            this.Oa.Ea(c)
        }
        Ic() {
            this.Oa.Ic()
        }
        Cb(c) {
            this.Oa.Cb(c)
        }
        Ee() {
            return !!B["audio/webm; codecs=opus"]
        }
        async tg(c) {
            c = await this.qd("runtime",
                "opus-decode", {
                arrayBuffer: c
            }, null, [c]);
            return new Float32Array(c)
        }
        De(c) {
            return /^(?:[a-z\-]+:)?\/\//.test(c) || "data:" === c.substr(0, 5) || "blob:" === c.substr(0, 5)
        }
        pd(c) {
            return !this.De(c)
        }
        async Fa(c) {
            return "cordova" === this.s && (c.startsWith("file:") || this.hb && this.pd(c)) ? (c.startsWith(
                this.F) && (c = c.substr(this.F.length)), c = await this.wb(c), URL.createObjectURL(
                    new Blob([c], {
                        type: "application/javascript"
                    }))) : c
        }
        async qf(c) {
            const k = c.filename;
            switch (c.as) {
                case "text":
                    return await this.we(k);
                case "buffer":
                    return await this.wb(k);
                default:
                    throw Error("unsupported type");
            }
        }
        ld(c) {
            const k = window.cordova.file.applicationDirectory + "www/" + c.toLowerCase();
            return new Promise((l, p) => {
                window.resolveLocalFileSystemURL(k, u => {
                    u.file(l, p)
                }, p)
            })
        }
        async we(c) {
            c = await this.ld(c);
            return await E(c)
        }
        vc() {
            if (y.length && !(8 <= C)) {
                C++;
                var c = y.shift();
                this.Ze(c.filename, c.Lg, c.Eg)
            }
        }
        wb(c) {
            return new Promise((k, l) => {
                y.push({
                    filename: c,
                    Lg: p => {
                        C--;
                        this.vc();
                        k(p)
                    },
                    Eg: p => {
                        C--;
                        this.vc();
                        l(p)
                    }
                });
                this.vc()
            })
        }
        async Ze(c, k, l) {
            try {
                const p = await this.ld(c),
                    u = await x(p);
                k(u)
            } catch (p) {
                l(p)
            }
        }
        Kc(c) {
            if ("windows-webview2" === this.s) window.chrome.webview.postMessage(JSON.stringify(c));
            else if ("macos-wkwebview" === this.s) window.webkit.messageHandlers.C3Wrapper.postMessage(JSON
                .stringify(c));
            else throw Error("cannot send wrapper message");
        }
        async Ye() {
            const c = [];
            for (const [k, l] of Object.entries(this.ha)) c.push(this.Xe(k, l));
            await Promise.all(c)
        }
        async Xe(c, k) {
            if ("object" === typeof k) this.ha[c] = new Blob([k.str], {
                type: k.type
            }), this.Ub[c] = k.str;
            else {
                let l = await this.ff(k);
                l || (l =
                    this.af(k));
                this.ha[c] = l
            }
        }
        async ff(c) {
            try {
                return await (await fetch(c)).blob()
            } catch (k) {
                return console.warn(
                    "Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",
                    k), null
            }
        }
        af(c) {
            c = this.Qf(c);
            return this.We(c.data, c.Hg)
        }
        Qf(c) {
            var k = c.indexOf(",");
            if (0 > k) throw new URIError("expected comma in data: uri");
            var l = c.substring(k + 1);
            k = c.substring(5, k).split(";");
            c = k[0] || "";
            const p = k[2];
            l = "base64" === k[1] || "base64" === p ? atob(l) : decodeURIComponent(l);
            return {
                Hg: c,
                data: l
            }
        }
        We(c, k) {
            var l = c.length;
            let p = l >> 2,
                u = new Uint8Array(l),
                r = new Uint32Array(u.buffer, 0, p),
                t, z;
            for (z = t = 0; t < p; ++t) r[t] = c.charCodeAt(z++) | c.charCodeAt(z++) << 8 | c.charCodeAt(
                z++) << 16 | c.charCodeAt(z++) << 24;
            for (l &= 3; l--;) u[z] = c.charCodeAt(z), ++z;
            return new Blob([u], {
                type: k
            })
        }
    }
}
"use strict"; {
    const f = self.ma;

    function a(e) {
        return e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || e.originalEvent && e.originalEvent
            .sourceCapabilities && e.originalEvent.sourceCapabilities.firesTouchEvents
    }
    const b = new Map([
        ["OSLeft", "MetaLeft"],
        ["OSRight", "MetaRight"]
    ]),
        d = {
            dispatchRuntimeEvent: !0,
            dispatchUserScriptEvent: !0
        },
        g = {
            dispatchUserScriptEvent: !0
        },
        n = {
            dispatchRuntimeEvent: !0
        };

    function q(e) {
        return new Promise((h, m) => {
            const c = document.createElement("link");
            c.onload = () => h(c);
            c.onerror = k => m(k);
            c.rel =
                "stylesheet";
            c.href = e;
            document.head.appendChild(c)
        })
    }

    function w(e) {
        return new Promise((h, m) => {
            const c = new Image;
            c.onload = () => h(c);
            c.onerror = k => m(k);
            c.src = e
        })
    }
    async function B(e) {
        e = URL.createObjectURL(e);
        try {
            return await w(e)
        } finally {
            URL.revokeObjectURL(e)
        }
    }

    function E(e) {
        return new Promise((h, m) => {
            let c = new FileReader;
            c.onload = k => h(k.target.result);
            c.onerror = k => m(k);
            c.readAsText(e)
        })
    }
    async function x(e, h, m) {
        if (!/firefox/i.test(navigator.userAgent)) return await B(e);
        var c = await E(e);
        c = (new DOMParser).parseFromString(c,
            "image/svg+xml");
        const k = c.documentElement;
        if (k.hasAttribute("width") && k.hasAttribute("height")) {
            const l = k.getAttribute("width"),
                p = k.getAttribute("height");
            if (!l.includes("%") && !p.includes("%")) return await B(e)
        }
        k.setAttribute("width", h + "px");
        k.setAttribute("height", m + "px");
        c = (new XMLSerializer).serializeToString(c);
        e = new Blob([c], {
            type: "image/svg+xml"
        });
        return await B(e)
    }

    function y(e) {
        do {
            if (e.parentNode && e.hasAttribute("contenteditable")) return !0;
            e = e.parentNode
        } while (e);
        return !1
    }
    const C = new Set(["input",
        "textarea", "datalist", "select"
    ]),
        F = new Set(["canvas", "body", "html"]);

    function A(e) {
        F.has(e.target.tagName.toLowerCase()) && e.preventDefault()
    }

    function G(e) {
        (e.metaKey || e.ctrlKey) && e.preventDefault()
    }
    self.C3_GetSvgImageSize = async function (e) {
        e = await B(e);
        if (0 < e.width && 0 < e.height) return [e.width, e.height]; {
            e.style.position = "absolute";
            e.style.left = "0px";
            e.style.top = "0px";
            e.style.visibility = "hidden";
            document.body.appendChild(e);
            const h = e.getBoundingClientRect();
            document.body.removeChild(e);
            return [h.width,
            h.height
            ]
        }
    };
    self.C3_RasterSvgImageBlob = async function (e, h, m, c, k) {
        e = await x(e, h, m);
        const l = document.createElement("canvas");
        l.width = c;
        l.height = k;
        l.getContext("2d").drawImage(e, 0, 0, h, m);
        return l
    };
    let J = !1;
    document.addEventListener("pause", () => J = !0);
    document.addEventListener("resume", () => J = !1);

    function M() {
        try {
            return window.parent && window.parent.document.hasFocus()
        } catch (e) {
            return !1
        }
    }
    f.Sa(class extends self.Ca {
        constructor(e) {
            super(e, "runtime");
            this.Rd = !0;
            this.Pa = -1;
            this.cd = "any";
            this.Id = this.Jd = !1;
            this.Xc =
                this.rb = this.za = null;
            e.C("canvas", "update-size", c => this.Nf(c));
            e.C("runtime", "invoke-download", c => this.Af(c));
            e.C("runtime", "raster-svg-image", c => this.Hf(c));
            e.C("runtime", "get-svg-image-size", c => this.yf(c));
            e.C("runtime", "set-target-orientation", c => this.Lf(c));
            e.C("runtime", "register-sw", () => this.If());
            e.C("runtime", "post-to-debugger", c => this.Dd(c));
            e.C("runtime", "go-to-script", c => this.Dd(c));
            e.C("runtime", "before-start-ticking", () => this.pf());
            e.C("runtime", "debug-highlight", c => this.sf(c));
            e.C("runtime",
                "enable-device-orientation", () => this.Ve());
            e.C("runtime", "enable-device-motion", () => this.Ue());
            e.C("runtime", "add-stylesheet", c => this.nf(c));
            e.C("runtime", "alert", c => this.Bc(c));
            e.C("runtime", "hide-cordova-splash", () => this.zf());
            const h = new Set(["input", "textarea", "datalist"]);
            window.addEventListener("contextmenu", c => {
                const k = c.target;
                h.has(k.tagName.toLowerCase()) || y(k) || c.preventDefault()
            });
            const m = e.K;
            window.addEventListener("selectstart", A);
            window.addEventListener("gesturehold", A);
            m.addEventListener("selectstart",
                A);
            m.addEventListener("gesturehold", A);
            window.addEventListener("touchstart", A, {
                passive: !1
            });
            "undefined" !== typeof PointerEvent ? (window.addEventListener("pointerdown", A, {
                passive: !1
            }), m.addEventListener("pointerdown", A)) : m.addEventListener("touchstart", A);
            this.ob = 0;
            window.addEventListener("mousedown", c => {
                1 === c.button && c.preventDefault()
            });
            window.addEventListener("mousewheel", G, {
                passive: !1
            });
            window.addEventListener("wheel", G, {
                passive: !1
            });
            window.addEventListener("resize", () => this.Of());
            window.addEventListener("fullscreenchange",
                () => this.Xa());
            window.addEventListener("webkitfullscreenchange", () => this.Xa());
            window.addEventListener("mozfullscreenchange", () => this.Xa());
            window.addEventListener("fullscreenerror", c => this.Dc(c));
            window.addEventListener("webkitfullscreenerror", c => this.Dc(c));
            window.addEventListener("mozfullscreenerror", c => this.Dc(c));
            e.nc() && window.addEventListener("focusout", () => {
                {
                    const l = document.activeElement;
                    if (l) {
                        var c = l.tagName.toLowerCase();
                        var k = new Set("email number password search tel text url".split(" "));
                        c = "textarea" === c ? !0 : "input" === c ? k.has(l.type.toLowerCase() ||
                            "text") : y(l)
                    } else c = !1
                }
                c || (document.scrollingElement.scrollTop = 0)
            });
            self.C3WrapperOnMessage = c => this.Pf(c);
            this.Ka = new Set;
            this.Vb = new WeakSet;
            this.oa = !1
        }
        pf() {
            "cordova" === this.A.s ? (document.addEventListener("pause", () => this.Hc(!0)), document
                .addEventListener("resume", () => this.Hc(!1))) : document.addEventListener(
                    "visibilitychange", () => this.Hc(document.hidden));
            return {
                isSuspended: !(!document.hidden && !J)
            }
        }
        hd() {
            window.addEventListener("focus", () =>
                this.Za("window-focus"));
            window.addEventListener("blur", () => {
                this.Za("window-blur", {
                    parentHasFocus: M()
                });
                this.ob = 0
            });
            window.addEventListener("focusin", h => {
                h = h.target;
                (C.has(h.tagName.toLowerCase()) || y(h)) && this.Za("keyboard-blur")
            });
            window.addEventListener("keydown", h => this.Cd("keydown", h));
            window.addEventListener("keyup", h => this.Cd("keyup", h));
            window.addEventListener("dblclick", h => this.Ec("dblclick", h, d));
            window.addEventListener("wheel", h => this.Ef(h));
            "undefined" !== typeof PointerEvent ? (window.addEventListener("pointerdown",
                h => {
                    this.yc(h);
                    this.Ya("pointerdown", h)
                }), this.A.ca && "undefined" !== typeof window.onpointerrawupdate && self === self
                    .top ? (this.rb = new self.Ke(() => this.df(), 5), this.rb.Md = !0, window
                        .addEventListener("pointerrawupdate", h => this.Ff(h))) : window.addEventListener(
                            "pointermove", h => this.Ya("pointermove", h)), window.addEventListener(
                                "pointerup", h => this.Ya("pointerup", h)), window.addEventListener(
                                    "pointercancel", h => this.Ya("pointercancel", h))) : (window.addEventListener(
                                        "mousedown", h => {
                                            this.yc(h);
                                            this.Fc("pointerdown",
                                                h)
                                        }), window.addEventListener("mousemove", h => this.Fc("pointermove", h)), window
                                            .addEventListener("mouseup", h => this.Fc("pointerup", h)), window.addEventListener(
                                                "touchstart", h => {
                                                    this.yc(h);
                                                    this.Gb("pointerdown", h)
                                                }), window.addEventListener("touchmove", h => this.Gb("pointermove", h)), window
                                                    .addEventListener("touchend", h => this.Gb("pointerup", h)), window.addEventListener(
                                                        "touchcancel", h => this.Gb("pointercancel", h)));
            const e = () => this.Ic();
            window.addEventListener("pointerup", e, !0);
            window.addEventListener("touchend",
                e, !0);
            window.addEventListener("click", e, !0);
            window.addEventListener("keydown", e, !0);
            window.addEventListener("gamepadconnected", e, !0)
        }
        Za(e, h) {
            v(this, e, h || null, n)
        }
        xa() {
            return this.A.xa()
        }
        wa() {
            return this.A.wa()
        }
        Of() {
            const e = this.xa(),
                h = this.wa();
            this.Za("window-resize", {
                innerWidth: e,
                innerHeight: h,
                devicePixelRatio: window.devicePixelRatio,
                isFullscreen: f.Va()
            });
            this.A.nc() && (-1 !== this.Pa && clearTimeout(this.Pa), this.Ed(e, h, 0))
        }
        Xf(e, h, m) {
            -1 !== this.Pa && clearTimeout(this.Pa);
            this.Pa = setTimeout(() => this.Ed(e,
                h, m), 48)
        }
        Ed(e, h, m) {
            const c = this.xa(),
                k = this.wa();
            this.Pa = -1;
            c != e || k != h ? this.Za("window-resize", {
                innerWidth: c,
                innerHeight: k,
                devicePixelRatio: window.devicePixelRatio,
                isFullscreen: f.Va()
            }) : 10 > m && this.Xf(c, k, m + 1)
        }
        Lf(e) {
            this.cd = e.targetOrientation
        }
        pg() {
            const e = this.cd;
            if (screen.orientation && screen.orientation.lock) screen.orientation.lock(e).catch(h =>
                console.warn("[Construct 3] Failed to lock orientation: ", h));
            else try {
                let h = !1;
                screen.lockOrientation ? h = screen.lockOrientation(e) : screen
                    .webkitLockOrientation ?
                    h = screen.webkitLockOrientation(e) : screen.mozLockOrientation ? h = screen
                        .mozLockOrientation(e) : screen.msLockOrientation && (h = screen
                            .msLockOrientation(e));
                h || console.warn("[Construct 3] Failed to lock orientation")
            } catch (h) {
                console.warn("[Construct 3] Failed to lock orientation: ", h)
            }
        }
        Xa() {
            const e = f.Va();
            e && "any" !== this.cd && this.pg();
            v(this, "fullscreenchange", {
                isFullscreen: e,
                innerWidth: this.xa(),
                innerHeight: this.wa()
            })
        }
        Dc(e) {
            console.warn("[Construct 3] Fullscreen request failed: ", e);
            v(this, "fullscreenerror", {
                isFullscreen: f.Va(),
                innerWidth: this.xa(),
                innerHeight: this.wa()
            })
        }
        Hc(e) {
            e ? this.A.uc() : this.A.Jc();
            v(this, "visibilitychange", {
                hidden: e
            })
        }
        Cd(e, h) {
            "Backspace" === h.key && A(h);
            const m = b.get(h.code) || h.code;
            D(this, e, {
                code: m,
                key: h.key,
                which: h.which,
                repeat: h.repeat,
                altKey: h.altKey,
                ctrlKey: h.ctrlKey,
                metaKey: h.metaKey,
                shiftKey: h.shiftKey,
                timeStamp: h.timeStamp
            }, d)
        }
        Ef(e) {
            v(this, "wheel", {
                clientX: e.clientX,
                clientY: e.clientY,
                pageX: e.pageX,
                pageY: e.pageY,
                deltaX: e.deltaX,
                deltaY: e.deltaY,
                deltaZ: e.deltaZ,
                deltaMode: e.deltaMode,
                timeStamp: e.timeStamp
            }, d)
        }
        Ec(e, h, m) {
            a(h) || D(this, e, {
                button: h.button,
                buttons: h.buttons,
                clientX: h.clientX,
                clientY: h.clientY,
                pageX: h.pageX,
                pageY: h.pageY,
                timeStamp: h.timeStamp
            }, m)
        }
        Fc(e, h) {
            if (!a(h)) {
                var m = this.ob;
                "pointerdown" === e && 0 !== m ? e = "pointermove" : "pointerup" === e && 0 !== h
                    .buttons && (e = "pointermove");
                D(this, e, {
                    pointerId: 1,
                    pointerType: "mouse",
                    button: h.button,
                    buttons: h.buttons,
                    lastButtons: m,
                    clientX: h.clientX,
                    clientY: h.clientY,
                    pageX: h.pageX,
                    pageY: h.pageY,
                    width: 0,
                    height: 0,
                    pressure: 0,
                    tangentialPressure: 0,
                    tiltX: 0,
                    tiltY: 0,
                    twist: 0,
                    timeStamp: h.timeStamp
                }, d);
                this.ob = h.buttons;
                this.Ec(h.type, h, g)
            }
        }
        Ya(e, h) {
            if (this.rb && "pointermove" !== e) {
                var m = this.rb;
                m.gb || (N(m), m.Sb = Date.now())
            }
            m = 0;
            "mouse" === h.pointerType && (m = this.ob);
            D(this, e, {
                pointerId: h.pointerId,
                pointerType: h.pointerType,
                button: h.button,
                buttons: h.buttons,
                lastButtons: m,
                clientX: h.clientX,
                clientY: h.clientY,
                pageX: h.pageX,
                pageY: h.pageY,
                width: h.width || 0,
                height: h.height || 0,
                pressure: h.pressure || 0,
                tangentialPressure: h.tangentialPressure || 0,
                tiltX: h.tiltX || 0,
                tiltY: h.tiltY || 0,
                twist: h.twist || 0,
                timeStamp: h.timeStamp
            }, d);
            "mouse" === h.pointerType && (m = "mousemove", "pointerdown" === e ? m = "mousedown" :
                "pointerup" === e && (m = "mouseup"), this.Ec(m, h, g), this.ob = h.buttons)
        }
        Ff(e) {
            this.Xc = e;
            e = this.rb;
            if (-1 === e.Qa) {
                var h = Date.now(),
                    m = h - e.Sb,
                    c = e.vg;
                m >= c && e.Md ? (e.Sb = h, e.gb = !0, e.Nc(), e.gb = !1) : e.Qa = self.setTimeout(e.ee,
                    Math.max(c - m, 4))
            }
        }
        df() {
            this.Ya("pointermove", this.Xc);
            this.Xc = null
        }
        Gb(e, h) {
            for (let m = 0, c = h.changedTouches.length; m < c; ++m) {
                const k = h.changedTouches[m];
                D(this, e, {
                    pointerId: k.identifier,
                    pointerType: "touch",
                    button: 0,
                    buttons: 0,
                    lastButtons: 0,
                    clientX: k.clientX,
                    clientY: k.clientY,
                    pageX: k.pageX,
                    pageY: k.pageY,
                    width: 2 * (k.radiusX || k.webkitRadiusX || 0),
                    height: 2 * (k.radiusY || k.webkitRadiusY || 0),
                    pressure: k.force || k.webkitForce || 0,
                    tangentialPressure: 0,
                    tiltX: 0,
                    tiltY: 0,
                    twist: k.rotationAngle || 0,
                    timeStamp: h.timeStamp
                }, d)
            }
        }
        yc(e) {
            window !== window.top && window.focus();
            this.Ad(e.target) && document.activeElement && !this.Ad(document.activeElement) && document
                .activeElement.blur()
        }
        Ad(e) {
            return !e || e === document ||
                e === window || e === document.body || "canvas" === e.tagName.toLowerCase()
        }
        Ve() {
            this.Jd || (this.Jd = !0, window.addEventListener("deviceorientation", e => this.uf(e)),
                window.addEventListener("deviceorientationabsolute", e => this.vf(e)))
        }
        Ue() {
            this.Id || (this.Id = !0, window.addEventListener("devicemotion", e => this.tf(e)))
        }
        uf(e) {
            v(this, "deviceorientation", {
                absolute: !!e.absolute,
                alpha: e.alpha || 0,
                beta: e.beta || 0,
                gamma: e.gamma || 0,
                timeStamp: e.timeStamp,
                webkitCompassHeading: e.webkitCompassHeading,
                webkitCompassAccuracy: e.webkitCompassAccuracy
            },
                d)
        }
        vf(e) {
            v(this, "deviceorientationabsolute", {
                absolute: !!e.absolute,
                alpha: e.alpha || 0,
                beta: e.beta || 0,
                gamma: e.gamma || 0,
                timeStamp: e.timeStamp
            }, d)
        }
        tf(e) {
            let h = null;
            var m = e.acceleration;
            m && (h = {
                x: m.x || 0,
                y: m.y || 0,
                z: m.z || 0
            });
            m = null;
            var c = e.accelerationIncludingGravity;
            c && (m = {
                x: c.x || 0,
                y: c.y || 0,
                z: c.z || 0
            });
            c = null;
            const k = e.rotationRate;
            k && (c = {
                alpha: k.alpha || 0,
                beta: k.beta || 0,
                gamma: k.gamma || 0
            });
            v(this, "devicemotion", {
                acceleration: h,
                accelerationIncludingGravity: m,
                rotationRate: c,
                interval: e.interval,
                timeStamp: e.timeStamp
            },
                d)
        }
        Nf(e) {
            const h = this.A.K;
            h.style.width = e.styleWidth + "px";
            h.style.height = e.styleHeight + "px";
            h.style.marginLeft = e.marginLeft + "px";
            h.style.marginTop = e.marginTop + "px";
            this.Rd && (h.style.display = "", this.Rd = !1)
        }
        Af(e) {
            const h = e.url;
            e = e.filename;
            const m = document.createElement("a"),
                c = document.body;
            m.textContent = e;
            m.href = h;
            m.download = e;
            c.appendChild(m);
            m.click();
            c.removeChild(m)
        }
        async Hf(e) {
            var h = e.imageBitmapOpts;
            e = await self.C3_RasterSvgImageBlob(e.blob, e.imageWidth, e.imageHeight, e.surfaceWidth, e
                .surfaceHeight);
            h = h ? await createImageBitmap(e, h) : await createImageBitmap(e);
            return {
                imageBitmap: h,
                transferables: [h]
            }
        }
        async yf(e) {
            return await self.C3_GetSvgImageSize(e.blob)
        }
        async nf(e) {
            await q(e.url)
        }
        Ic() {
            var e = [...this.Ka];
            this.Ka.clear();
            if (!this.oa)
                for (const h of e) (e = h.play()) && e.catch(() => {
                    this.Vb.has(h) || this.Ka.add(h)
                })
        }
        va(e) {
            if ("function" !== typeof e.play) throw Error("missing play function");
            this.Vb.delete(e);
            let h;
            try {
                h = e.play()
            } catch (m) {
                this.Ka.add(e);
                return
            }
            h && h.catch(() => {
                this.Vb.has(e) || this.Ka.add(e)
            })
        }
        Ea(e) {
            this.Ka.delete(e);
            this.Vb.add(e)
        }
        Cb(e) {
            this.oa = !!e
        }
        zf() {
            navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide()
        }
        sf(e) {
            if (e.show) {
                this.za || (this.za = document.createElement("div"), this.za.id = "inspectOutline",
                    document.body.appendChild(this.za));
                var h = this.za;
                h.style.display = "";
                h.style.left = e.left - 1 + "px";
                h.style.top = e.top - 1 + "px";
                h.style.width = e.width + 2 + "px";
                h.style.height = e.height + 2 + "px";
                h.textContent = e.name
            } else this.za && (this.za.style.display = "none")
        }
        If() {
            window.C3_RegisterSW && window.C3_RegisterSW()
        }
        Dd(e) {
            window.c3_postToMessagePort &&
                (e.from = "runtime", window.c3_postToMessagePort(e))
        }
        lf(e, h) {
            return this.A.qd(this.ab, "js-invoke-function", {
                name: e,
                params: h
            }, void 0, void 0)
        }
        Bc(e) {
            alert(e.message)
        }
        Pf(e) {
            "entered-fullscreen" === e ? (f.Jb(!0), this.Xa()) : "exited-fullscreen" === e ? (f.Jb(!1),
                this.Xa()) : console.warn("Unknown wrapper message: ", e)
        }
    })
}
"use strict";
async function P(f) {
    if (f.ug) throw Error("already initialised");
    f.ug = !0;
    var a = f.ac.xc("dispatchworker.js");
    f.Pc = await f.ac.hc(a, f.F, {
        name: "DispatchWorker"
    });
    a = new MessageChannel;
    f.Tc = a.port1;
    f.Pc.postMessage({
        type: "_init",
        "in-port": a.port2
    }, [a.port2]);
    f.ad = await R(f)
}

function Q(f) {
    return [f.Tc, f.ad]
}
async function R(f) {
    const a = f.Td.length;
    var b = f.ac.xc("jobworker.js");
    b = await f.ac.hc(b, f.F, {
        name: "JobWorker" + a
    });
    const d = new MessageChannel,
        g = new MessageChannel;
    f.Pc.postMessage({
        type: "_addJobWorker",
        port: d.port1
    }, [d.port1]);
    b.postMessage({
        type: "init",
        number: a,
        "dispatch-port": d.port2,
        "output-port": g.port2
    }, [d.port2, g.port2]);
    f.Td.push(b);
    return g.port1
}
self.Ge = class {
    constructor(f) {
        this.ac = f;
        this.F = f.F;
        this.F = "preview" === f.s ? this.F + "workers/" : this.F + f.bc;
        this.xg = Math.min(navigator.hardwareConcurrency || 2, 16);
        this.Pc = null;
        this.Td = [];
        this.ad = this.Tc = null
    }
};
"use strict";
window.C3_IsSupported && (window.c3_runtimeInterface = new self.ma({
    Mg: !1,
    Ng: "workermain.js",
    Ra: ["c3runtime.js"],
    ec: [],
    ed: "",
    Jg: "",
    gd: [],
    fe: "playable-ad"
}));
"use strict";
async function S(f) {
    var a = T(f.index);
    if (a && (a = a.vibrationActuator) && a.playEffect) try {
        await a.playEffect("dual-rumble", {
            duration: f.duration,
            startDelay: 0,
            weakMagnitude: f.weakMag,
            strongMagnitude: f.strongMag
        })
    } catch (b) {
        console.warn("[Gamepad] Failed to vibrate gamepad: ", b)
    }
}

function U() {
    return Array.from(navigator.getGamepads()).filter(f => f && f.connected)
}

function T(f) {
    for (const a of U())
        if (a.index === f) return a;
    return null
}
self.ma.Sa(class extends self.Ca {
    constructor(f) {
        super(f, "gamepad");
        this.Sd = !!navigator.getGamepads;
        this.Vc = !1;
        I(this, "is-supported", () => this.Sd);
        I(this, "ready", () => {
            this.Vc = !0;
            for (const a of U()) v(this, "gamepad-connected", {
                index: a.index,
                id: a.id
            });
            this.Sd && L(this)
        });
        I(this, "vibrate", a => S(a));
        I(this, "reset-vibrate", a => {
            (a = T(a.index)) && (a = a.vibrationActuator) && a.reset && a.reset()
        });
        window.addEventListener("gamepadconnected", a => {
            this.Vc && (a = a.gamepad, v(this, "gamepad-connected", {
                index: a.index,
                id: a.id
            }))
        });
        window.addEventListener("gamepaddisconnected", a => {
            this.Vc && v(this, "gamepad-disconnected", {
                index: a.gamepad.index
            })
        });
        window.addEventListener("unload", () => {
            for (const a of U()) {
                const b = a.vibrationActuator;
                b && b.reset && b.reset()
            }
        })
    }
    ua() {
        var f = U();
        f.length && (f = f.map(a => ({
            index: a.index,
            id: a.id,
            buttons: a.buttons.map(b => ({
                pressed: b.pressed,
                value: b.value
            })),
            axes: a.axes
        })), v(this, "input-update", f))
    }
});
"use strict";
async function V(f, a) {
    a = a.type;
    let b = !0;
    0 === a ? b = await W() : 1 === a && (b = await X());
    v(f, "permission-result", {
        type: a,
        result: b
    })
}
async function W() {
    if (!self.DeviceOrientationEvent || !self.DeviceOrientationEvent.requestPermission) return !0;
    try {
        return "granted" === await self.DeviceOrientationEvent.requestPermission()
    } catch (f) {
        return console.warn("[Touch] Failed to request orientation permission: ", f), !1
    }
}
async function X() {
    if (!self.DeviceMotionEvent || !self.DeviceMotionEvent.requestPermission) return !0;
    try {
        return "granted" === await self.DeviceMotionEvent.requestPermission()
    } catch (f) {
        return console.warn("[Touch] Failed to request motion permission: ", f), !1
    }
}
self.ma.Sa(class extends self.Ca {
    constructor(f) {
        super(f, "touch");
        I(this, "request-permission", a => V(this, a))
    }
});
"use strict"; {
    const f = 180 / Math.PI;
    self.da = class extends self.Ca {
        constructor(a) {
            super(a, "audio");
            this.Ob = this.f = null;
            this.Qb = this.Sc = !1;
            this.ra = () => this.qg();
            this.$ = [];
            this.D = [];
            this.ga = null;
            this.Ud = "";
            this.Vd = -1;
            this.qb = new Map;
            this.Yc = 1;
            this.oa = !1;
            this.dd = 0;
            this.cc = 1;
            this.Qc = 0;
            this.Xd = "HRTF";
            this.Nd = "inverse";
            this.Yd = 600;
            this.Wd = 1E4;
            this.$d = 1;
            this.Pd = this.bd = !1;
            this.ce = this.A.Ee();
            this.aa = new Map;
            this.Ha = new Set;
            this.Uc = !1;
            this.Zc = "";
            this.Aa = null;
            self.C3Audio_OnMicrophoneStream = (b, d) => this.Df(b, d);
            this.Nb = null;
            self.C3Audio_GetOutputStream = () => this.xf();
            self.C3Audio_DOMInterface = this;
            K(this, [
                ["create-audio-context", b => this.$e(b)],
                ["play", b => this.Rf(b)],
                ["stop", b => this.ng(b)],
                ["stop-all", () => this.og()],
                ["set-paused", b => this.gg(b)],
                ["set-volume", b => this.lg(b)],
                ["fade-volume", b => this.ef(b)],
                ["set-master-volume", b => this.eg(b)],
                ["set-muted", b => this.fg(b)],
                ["set-silent", b => this.ig(b)],
                ["set-looping", b => this.dg(b)],
                ["set-playback-rate", b => this.hg(b)],
                ["seek", b => this.Yf(b)],
                ["preload", b => this.Sf(b)],
                ["unload", b =>
                    this.rg(b)
                ],
                ["unload-all", () => this.sg()],
                ["set-suspended", b => this.jg(b)],
                ["add-effect", b => this.vd(b)],
                ["set-effect-param", b => this.ag(b)],
                ["remove-effects", b => this.Uf(b)],
                ["tick", b => this.Mf(b)],
                ["load-state", b => this.Bf(b)]
            ])
        }
        async $e(a) {
            a.isiOSCordova && (this.bd = !0);
            this.dd = a.timeScaleMode;
            this.Xd = ["equalpower", "HRTF", "soundfield"][a.panningModel];
            this.Nd = ["linear", "inverse", "exponential"][a.distanceModel];
            this.Yd = a.refDistance;
            this.Wd = a.maxDistance;
            this.$d = a.rolloffFactor;
            var b = {
                latencyHint: a.latencyHint
            };
            this.ce || (b.sampleRate = 48E3);
            if ("undefined" !== typeof AudioContext) this.f = new AudioContext(b);
            else if ("undefined" !== typeof webkitAudioContext) this.f = new webkitAudioContext(b);
            else throw Error("Web Audio API not supported");
            this.wd();
            this.f.onstatechange = () => {
                "running" !== this.f.state && this.wd()
            };
            this.Ob = this.f.createGain();
            this.Ob.connect(this.f.destination);
            b = a.listenerPos;
            this.f.listener.setPosition(b[0], b[1], b[2]);
            this.f.listener.setOrientation(0, 0, 1, 0, -1, 0);
            self.C3_GetAudioContextCurrentTime = () =>
                this.ic();
            try {
                await Promise.all(a.preloadList.map(d => this.Eb(d.originalUrl, d.url, d.type, !1)))
            } catch (d) {
                console.error("[Construct 3] Preloading sounds failed: ", d)
            }
            return {
                sampleRate: this.f.sampleRate
            }
        }
        wd() {
            this.Qb || (this.Sc = !1, window.addEventListener("pointerup", this.ra, !0), window
                .addEventListener("touchend", this.ra, !0), window.addEventListener("click", this.ra, !0),
                window.addEventListener("keydown", this.ra, !0), this.Qb = !0)
        }
        bf() {
            this.Qb && (this.Sc = !0, window.removeEventListener("pointerup", this.ra, !0), window
                .removeEventListener("touchend",
                    this.ra, !0), window.removeEventListener("click", this.ra, !0), window
                        .removeEventListener("keydown", this.ra, !0), this.Qb = !1)
        }
        qg() {
            if (!this.Sc) {
                var a = this.f;
                "suspended" === a.state && a.resume && a.resume();
                var b = a.createBuffer(1, 220, 22050),
                    d = a.createBufferSource();
                d.buffer = b;
                d.connect(a.destination);
                d.start(0);
                "running" === a.state && this.bf()
            }
        }
        W() {
            return this.f
        }
        ic() {
            return this.f.currentTime
        }
        sa() {
            return this.Ob
        }
        nd(a) {
            return (a = this.aa.get(a.toLowerCase())) ? a[0].P() : this.sa()
        }
        ge(a, b) {
            a = a.toLowerCase();
            let d = this.aa.get(a);
            d || (d = [], this.aa.set(a, d));
            b.cg(d.length);
            b.kg(a);
            d.push(b);
            this.Gd(a)
        }
        Gd(a) {
            let b = this.sa();
            const d = this.aa.get(a);
            if (d && d.length) {
                b = d[0].P();
                for (let g = 0, n = d.length; g < n; ++g) {
                    const q = d[g];
                    g + 1 === n ? q.S(this.sa()) : q.S(d[g + 1].P())
                }
            }
            for (const g of this.la(a)) g.Le(b);
            this.Aa && this.Zc === a && (this.Aa.disconnect(), this.Aa.connect(b))
        }
        yb() {
            return this.Yc
        }
        zb() {
            return this.oa
        }
        bg() {
            this.Pd = !0
        }
        ye(a, b) {
            return b ? this.A.tg(a).then(d => {
                const g = this.f.createBuffer(1, d.length, 48E3);
                g.getChannelData(0).set(d);
                return g
            }) :
                new Promise((d, g) => {
                    this.f.decodeAudioData(a, d, g)
                })
        }
        va(a) {
            this.A.va(a)
        }
        Ea(a) {
            this.A.Ea(a)
        }
        rd(a) {
            let b = 0;
            for (let d = 0, g = this.D.length; d < g; ++d) {
                const n = this.D[d];
                this.D[b] = n;
                n.L === a ? n.c() : ++b
            }
            this.D.length = b
        }
        Me() {
            let a = 0;
            for (let b = 0, d = this.$.length; b < d; ++b) {
                const g = this.$[b];
                this.$[a] = g;
                g.ta() ? g.c() : ++a
            }
            this.$.length = a
        } * la(a) {
            if (a)
                for (const b of this.D) self.da.ze(b.Y, a) && (yield b);
            else this.ga && !this.ga.T() && (yield this.ga)
        }
        async Eb(a, b, d, g, n) {
            for (const q of this.$)
                if (q.Ua() === b) return await Y(q), q;
            if (n) return null;
            g && (this.bd || this.Pd) && this.Me();
            n = "audio/webm; codecs=opus" === d && !this.ce;
            g && n && this.bg();
            a = !g || this.bd || n ? new self.ue(this, a, b, d, g, n) : new self.se(this, a, b, d, g);
            this.$.push(a);
            await Y(a);
            return a
        }
        async wc(a, b, d, g, n) {
            for (const q of this.D)
                if (q.Ua() === b && (q.fc() || n)) return q.Oe(g), q;
            a = await this.Eb(a, b, d, n);
            g = "html5" === a.Lc ? new self.te(a.i, a, g) : new self.ve(a.i, a, g);
            this.D.push(g);
            return g
        }
        Se(a) {
            let b = this.qb.get(a);
            if (!b) {
                let d = null;
                b = {
                    fd: 0,
                    Ig: new Promise(g => d = g),
                    resolve: d
                };
                this.qb.set(a,
                    b)
            }
            b.fd++
        }
        Vf(a) {
            const b = this.qb.get(a);
            if (!b) throw Error("expected pending tag");
            b.fd--;
            0 === b.fd && (b.resolve(), this.qb.delete(a))
        }
        tc(a) {
            a || (a = this.Ud);
            return (a = this.qb.get(a)) ? a.Ig : Promise.resolve()
        }
        Fb() {
            if (0 < this.Ha.size) L(this);
            else
                for (const a of this.D)
                    if (a.od()) {
                        L(this);
                        break
                    }
        }
        ua() {
            for (var a of this.Ha) a.ua();
            a = this.ic();
            for (var b of this.D) b.ua(a);
            b = this.D.filter(d => d.od()).map(d => d.Ta());
            v(this, "state", {
                tickCount: this.Vd,
                audioInstances: b,
                analysers: [...this.Ha].map(d => d.Be())
            });
            0 === b.length &&
                0 === this.Ha.size && this.Rb && (this.A.Wf(this.de), this.Rb = !1)
        }
        pc(a, b, d) {
            v(this, "trigger", {
                type: a,
                tag: b,
                aiid: d
            })
        }
        async Rf(a) {
            const b = a.originalUrl,
                d = a.url,
                g = a.type,
                n = a.isMusic,
                q = a.tag,
                w = a.isLooping,
                B = a.vol,
                E = a.pos,
                x = a.panning;
            let y = a.off;
            0 < y && !a.trueClock && (this.f.getOutputTimestamp ? (a = this.f.getOutputTimestamp(), y = y - a
                .performanceTime / 1E3 + a.contextTime) : y = y - performance.now() / 1E3 + this.f
                    .currentTime);
            this.Ud = q;
            this.Se(q);
            try {
                this.ga = await this.wc(b, d, g, q, n), x ? (this.ga.Bb(!0), this.ga.Ne(x.x, x.y, x.angle,
                    x.innerAngle, x.outerAngle, x.outerGain), x.hasOwnProperty("uid") && this.ga.Pe(x
                        .uid)) : this.ga.Bb(!1), this.ga.Play(w, B, E, y)
            } catch (C) {
                console.error("[Construct 3] Audio: error starting playback: ", C);
                return
            } finally {
                this.Vf(q)
            }
            L(this)
        }
        ng(a) {
            a = a.tag;
            for (const b of this.la(a)) b.na()
        }
        og() {
            for (const a of this.D) a.na()
        }
        gg(a) {
            const b = a.tag;
            a = a.paused;
            for (const d of this.la(b)) a ? d.Wa() : d.Ab();
            this.Fb()
        }
        lg(a) {
            const b = a.tag;
            a = a.vol;
            for (const d of this.la(b)) d.Db(a)
        }
        async ef(a) {
            const b = a.tag,
                d = a.vol,
                g = a.duration;
            a = a.stopOnEnd;
            await this.tc(b);
            for (const n of this.la(b)) n.Ae(d, g, a);
            this.Fb()
        }
        eg(a) {
            this.Yc = a.vol;
            for (const b of this.D) b.Lb()
        }
        fg(a) {
            const b = a.tag;
            a = a.isMuted;
            for (const d of this.la(b)) d.sd(a)
        }
        ig(a) {
            this.oa = a.isSilent;
            this.A.Cb(this.oa);
            for (const b of this.D) b.Kb()
        }
        dg(a) {
            const b = a.tag;
            a = a.isLooping;
            for (const d of this.la(b)) d.rc(a)
        }
        async hg(a) {
            const b = a.tag;
            a = a.rate;
            await this.tc(b);
            for (const d of this.la(b)) d.ud(a)
        }
        async Yf(a) {
            const b = a.tag;
            a = a.pos;
            await this.tc(b);
            for (const d of this.la(b)) d.qc(a)
        }
        async Sf(a) {
            const b =
                a.originalUrl,
                d = a.url,
                g = a.type;
            a = a.isMusic;
            try {
                await this.wc(b, d, g, "", a)
            } catch (n) {
                console.error("[Construct 3] Audio: error preloading: ", n)
            }
        }
        async rg(a) {
            if (a = await this.Eb("", a.url, a.type, a.isMusic, !0)) a.c(), a = this.$.indexOf(a), -1 !== a &&
                this.$.splice(a, 1)
        }
        sg() {
            for (const a of this.$) a.c();
            this.$.length = 0
        }
        jg(a) {
            a = a.isSuspended;
            !a && this.f.resume && this.f.resume();
            for (const b of this.D) b.sc(a);
            a && this.f.suspend && this.f.suspend()
        }
        Mf(a) {
            this.cc = a.timeScale;
            this.Qc = a.gameTime;
            this.Vd = a.tickCount;
            if (0 !== this.dd)
                for (var b of this.D) b.Ga();
            (b = a.listenerPos) && this.f.listener.setPosition(b[0], b[1], b[2]);
            for (const d of a.instPans) {
                a = d.uid;
                for (const g of this.D) g.fa === a && g.td(d.x, d.y, d.angle)
            }
        }
        async vd(a) {
            var b = a.type;
            const d = a.tag;
            var g = a.params;
            if ("filter" === b) g = new self.me(this, ...g);
            else if ("delay" === b) g = new self.ke(this, ...g);
            else if ("convolution" === b) {
                b = null;
                try {
                    b = await this.Eb(a.bufferOriginalUrl, a.bufferUrl, a.bufferType, !1)
                } catch (n) {
                    console.log("[Construct 3] Audio: error loading convolution: ", n);
                    return
                }
                g = new self.je(this, b.Z,
                    ...g);
                g.Zf(a.bufferOriginalUrl, a.bufferType)
            } else if ("flanger" === b) g = new self.ne(this, ...g);
            else if ("phaser" === b) g = new self.pe(this, ...g);
            else if ("gain" === b) g = new self.oe(this, ...g);
            else if ("tremolo" === b) g = new self.re(this, ...g);
            else if ("ringmod" === b) g = new self.qe(this, ...g);
            else if ("distortion" === b) g = new self.le(this, ...g);
            else if ("compressor" === b) g = new self.ie(this, ...g);
            else if ("analyser" === b) g = new self.he(this, ...g);
            else throw Error("invalid effect type");
            this.ge(d, g);
            this.Fd()
        }
        ag(a) {
            const b =
                a.index,
                d = a.param,
                g = a.value,
                n = a.ramp,
                q = a.time;
            a = this.aa.get(a.tag);
            !a || 0 > b || b >= a.length || (a[b].X(d, g, n, q), this.Fd())
        }
        Uf(a) {
            a = a.tag.toLowerCase();
            const b = this.aa.get(a);
            if (b && b.length) {
                for (const d of b) d.c();
                this.aa.delete(a);
                this.Gd(a)
            }
        }
        Re(a) {
            this.Ha.add(a);
            this.Fb()
        }
        Tf(a) {
            this.Ha.delete(a)
        }
        Fd() {
            this.Uc || (this.Uc = !0, Promise.resolve().then(() => this.cf()))
        }
        cf() {
            const a = {};
            for (const [b, d] of this.aa) a[b] = d.map(g => g.Ta());
            v(this, "fxstate", {
                fxstate: a
            });
            this.Uc = !1
        }
        async Bf(a) {
            const b = a.saveLoadMode;
            if (3 !==
                b)
                for (var d of this.D) d.ta() && 1 === b || (d.ta() || 2 !== b) && d.na();
            for (const g of this.aa.values())
                for (const n of g) n.c();
            this.aa.clear();
            this.cc = a.timeScale;
            this.Qc = a.gameTime;
            d = a.listenerPos;
            this.f.listener.setPosition(d[0], d[1], d[2]);
            this.oa = a.isSilent;
            this.A.Cb(this.oa);
            this.Yc = a.masterVolume;
            d = [];
            for (const g of Object.values(a.effects)) d.push(Promise.all(g.map(n => this.vd(n))));
            await Promise.all(d);
            await Promise.all(a.playing.map(g => this.mf(g, b)));
            this.Fb()
        }
        async mf(a, b) {
            if (3 !== b) {
                var d = a.bufferOriginalUrl,
                    g = a.bufferUrl,
                    n = a.bufferType,
                    q = a.isMusic,
                    w = a.tag,
                    B = a.isLooping,
                    E = a.volume,
                    x = a.playbackTime;
                if (!q || 1 !== b)
                    if (q || 2 !== b) {
                        b = null;
                        try {
                            b = await this.wc(d, g, n, w, q)
                        } catch (y) {
                            console.error("[Construct 3] Audio: error loading audio state: ", y);
                            return
                        }
                        b.Je(a.pan);
                        b.Play(B, E, x, 0);
                        a.isPlaying || b.Wa();
                        b.Ac(a)
                    }
            }
        }
        Df(a, b) {
            this.Aa && this.Aa.disconnect();
            this.Zc = b.toLowerCase();
            this.Aa = this.f.createMediaStreamSource(a);
            this.Aa.connect(this.nd(this.Zc))
        }
        xf() {
            this.Nb || (this.Nb = this.f.createMediaStreamDestination(), this.Ob.connect(this.Nb));
            return this.Nb.stream
        }
        static ze(a, b) {
            return a.length !== b.length ? !1 : a === b ? !0 : a.toLowerCase() === b.toLowerCase()
        }
        static Qe(a) {
            return a * f
        }
        static xe(a) {
            return Math.pow(10, a / 20)
        }
        static md(a) {
            return Math.max(Math.min(self.da.xe(a), 1), 0)
        }
        static Ie(a) {
            return Math.log(a) / Math.log(10) * 20
        }
        static He(a) {
            return self.da.Ie(Math.max(Math.min(a, 1), 0))
        }
        static Dg(a, b) {
            return 1 - Math.exp(-b * a)
        }
    };
    self.ma.Sa(self.da)
}
"use strict";

function Y(f) {
    f.Tb || (f.Tb = f.zc());
    return f.Tb
}
self.jd = class {
    constructor(f, a, b, d, g) {
        this.i = f;
        this.zg = a;
        this.Ba = b;
        this.R = d;
        this.wg = g;
        this.Lc = "";
        this.Tb = null
    }
    c() {
        this.Tb = this.i = null
    }
    zc() { }
    W() {
        return this.i.W()
    }
    kc() {
        return this.zg
    }
    Ua() {
        return this.Ba
    }
    jc() {
        return this.R
    }
    ta() {
        return this.wg
    }
    ea() { }
};
"use strict";
self.se = class extends self.jd {
    constructor(f, a, b, d, g) {
        super(f, a, b, d, g);
        this.Lc = "html5";
        this.J = new Audio;
        this.J.crossOrigin = "anonymous";
        this.J.autoplay = !1;
        this.J.preload = "auto";
        this.kb = this.lb = null;
        this.J.addEventListener("canplaythrough", () => !0);
        this.pb = this.W().createGain();
        this.nb = null;
        this.J.addEventListener("canplay", () => {
            this.lb && (this.lb(), this.kb = this.lb = null);
            !this.nb && this.J && (this.nb = this.W().createMediaElementSource(this.J), this.nb
                .connect(this.pb))
        });
        this.onended = null;
        this.J.addEventListener("ended",
            () => {
                if (this.onended) this.onended()
            });
        this.J.addEventListener("error", n => {
            console.error(`[Construct 3] Audio '${this.Ba}' error: `, n);
            this.kb && (this.kb(n), this.kb = this.lb = null)
        })
    }
    c() {
        this.i.rd(this);
        this.pb.disconnect();
        this.pb = null;
        this.nb.disconnect();
        this.nb = null;
        this.J && !this.J.paused && this.J.pause();
        this.J = this.onended = null;
        super.c()
    }
    zc() {
        return new Promise((f, a) => {
            this.lb = f;
            this.kb = a;
            this.J.src = this.Ba
        })
    }
    O() {
        return this.J
    }
    ea() {
        return this.J.duration
    }
};
"use strict";
async function aa(f) {
    if (f.ya) return f.ya;
    var a = f.i.A;
    if ("cordova" === a.s && a.pd(f.Ba) && a.hb) f.ya = await a.wb(f.Ba);
    else {
        a = await fetch(f.Ba);
        if (!a.ok) throw Error(`error fetching audio data: ${a.status} ${a.statusText}`);
        f.ya = await a.arrayBuffer()
    }
}
async function ba(f) {
    if (f.Z) return f.Z;
    f.Z = await f.i.ye(f.ya, f.yg);
    f.ya = null
}
self.ue = class extends self.jd {
    constructor(f, a, b, d, g, n) {
        super(f, a, b, d, g);
        this.Lc = "webaudio";
        this.Z = this.ya = null;
        this.yg = !!n
    }
    c() {
        this.i.rd(this);
        this.Z = this.ya = null;
        super.c()
    }
    async zc() {
        try {
            await aa(this), await ba(this)
        } catch (f) {
            console.error(`[Construct 3] Failed to load audio '${this.Ba}': `, f)
        }
    }
    ea() {
        return this.Z ? this.Z.duration : 0
    }
};
"use strict"; {
    let f = 0;
    self.kd = class {
        constructor(a, b, d) {
            this.i = a;
            this.L = b;
            this.Y = d;
            this.Mb = f++;
            this.M = this.W().createGain();
            this.M.connect(this.sa());
            this.B = null;
            this.ib = !1;
            this.ja = [0, 0, 0];
            this.ia = [0, 0, 0];
            this.H = !0;
            this.V = this.ka = this.G = !1;
            this.tb = 1;
            this.Ia = !1;
            this.qa = 1;
            a = this.i.dd;
            this.Wc = 1 === a && !this.ta() || 2 === a;
            this.eb = this.fa = -1;
            this.be = !1
        }
        c() {
            this.L = this.i = null;
            this.B && (this.B.disconnect(), this.B = null);
            this.M.disconnect();
            this.M = null
        }
        W() {
            return this.i.W()
        }
        sa() {
            return this.i.nd(this.Y)
        }
        yb() {
            return this.i.yb()
        }
        xb() {
            return this.Wc ?
                this.i.Qc : performance.now() / 1E3
        }
        kc() {
            return this.L.kc()
        }
        Ua() {
            return this.L.Ua()
        }
        jc() {
            return this.L.jc()
        }
        ta() {
            return this.L.ta()
        }
        Oe(a) {
            this.Y = a
        }
        T() { }
        fc() { }
        IsPlaying() {
            return !this.H && !this.G && !this.T()
        }
        od() {
            return !this.H && !this.T()
        }
        Da() { }
        ea() {
            return this.L.ea()
        }
        Play() { }
        na() { }
        Wa() { }
        Ab() { }
        Db(a) {
            this.tb = a;
            this.M.gain.cancelScheduledValues(0);
            this.eb = -1;
            this.M.gain.value = this.lc()
        }
        Ae(a, b, d) {
            if (!this.Ia) {
                a *= this.yb();
                var g = this.M.gain;
                g.cancelScheduledValues(0);
                var n = this.i.ic();
                b = n + b;
                g.setValueAtTime(g.value,
                    n);
                g.linearRampToValueAtTime(a, b);
                this.tb = a;
                this.eb = b;
                this.be = d
            }
        }
        Lb() {
            this.Db(this.tb)
        }
        ua(a) {
            -1 !== this.eb && a >= this.eb && (this.eb = -1, this.be && this.na(), this.i.pc("fade-ended",
                this.Y, this.Mb))
        }
        lc() {
            const a = this.tb * this.yb();
            return isFinite(a) ? a : 0
        }
        sd(a) {
            a = !!a;
            this.Ia !== a && (this.Ia = a, this.Kb())
        }
        zb() {
            return this.i.zb()
        }
        Kb() { }
        rc() { }
        ud(a) {
            this.qa !== a && (this.qa = a, this.Ga())
        }
        Ga() { }
        qc() { }
        sc() { }
        Bb(a) {
            a = !!a;
            this.ib !== a && ((this.ib = a) ? (this.B || (this.B = this.W().createPanner(), this.B
                .panningModel = this.i.Xd, this.B.distanceModel =
                this.i.Nd, this.B.refDistance = this.i.Yd, this.B.maxDistance = this.i.Wd, this.B
                    .rolloffFactor = this.i.$d), this.M.disconnect(), this.M.connect(this.B), this.B
                        .connect(this.sa())) : (this.B.disconnect(), this.M.disconnect(), this.M.connect(this
                            .sa())))
        }
        Ne(a, b, d, g, n, q) {
            this.ib && (this.td(a, b, d), a = self.da.Qe, this.B.coneInnerAngle = a(g), this.B
                .coneOuterAngle = a(n), this.B.coneOuterGain = q)
        }
        td(a, b, d) {
            this.ib && (this.ja[0] = a, this.ja[1] = b, this.ja[2] = 0, this.ia[0] = Math.cos(d), this.ia[1] =
                Math.sin(d), this.ia[2] = 0, this.B.setPosition(...this.ja),
                this.B.setOrientation(...this.ia))
        }
        Pe(a) {
            this.fa = a
        }
        mc() { }
        Le(a) {
            const b = this.B || this.M;
            b.disconnect();
            b.connect(a)
        }
        Ta() {
            return {
                aiid: this.Mb,
                tag: this.Y,
                duration: this.ea(),
                volume: this.tb,
                isPlaying: this.IsPlaying(),
                playbackTime: this.Da(),
                playbackRate: this.qa,
                uid: this.fa,
                bufferOriginalUrl: this.kc(),
                bufferUrl: "",
                bufferType: this.jc(),
                isMusic: this.ta(),
                isLooping: this.V,
                isMuted: this.Ia,
                resumePosition: this.mc(),
                pan: this.Ce()
            }
        }
        Ac(a) {
            this.ud(a.playbackRate);
            this.sd(a.isMuted)
        }
        Ce() {
            if (!this.B) return null;
            const a =
                this.B;
            return {
                pos: this.ja,
                orient: this.ia,
                cia: a.coneInnerAngle,
                coa: a.coneOuterAngle,
                cog: a.coneOuterGain,
                uid: this.fa
            }
        }
        Je(a) {
            if (a) {
                this.Bb(!0);
                a = this.B;
                var b = a.pos;
                this.ja[0] = b[0];
                this.ja[1] = b[1];
                this.ja[2] = b[2];
                b = a.orient;
                this.ia[0] = b[0];
                this.ia[1] = b[1];
                this.ia[2] = b[2];
                a.setPosition(...this.ja);
                a.setOrientation(...this.ia);
                a.coneInnerAngle = a.cia;
                a.coneOuterAngle = a.coa;
                a.coneOuterGain = a.cog;
                this.fa = a.uid
            } else this.Bb(!1)
        }
    }
}
"use strict";
self.te = class extends self.kd {
    constructor(f, a, b) {
        super(f, a, b);
        this.L.pb.connect(this.M);
        this.L.onended = () => this.Cc()
    }
    c() {
        this.na();
        this.L.pb.disconnect();
        super.c()
    }
    O() {
        return this.L.O()
    }
    Cc() {
        this.H = !0;
        this.fa = -1;
        this.i.pc("ended", this.Y, this.Mb)
    }
    T() {
        return this.O().ended
    }
    fc() {
        return this.H ? !0 : this.T()
    }
    Da() {
        let f = this.O().currentTime;
        this.V || (f = Math.min(f, this.ea()));
        return f
    }
    Play(f, a, b) {
        const d = this.O();
        1 !== d.playbackRate && (d.playbackRate = 1);
        d.loop !== f && (d.loop = f);
        this.Db(a);
        d.muted && (d.muted = !1);
        if (d.currentTime !== b) try {
            d.currentTime = b
        } catch (g) {
            console.warn(`[Construct 3] Exception seeking audio '${this.L.Ua()}' to position '${b}': `, g)
        }
        this.i.va(d);
        this.G = this.H = !1;
        this.V = f;
        this.qa = 1
    }
    na() {
        const f = this.O();
        f.paused || f.pause();
        this.i.Ea(f);
        this.H = !0;
        this.G = !1;
        this.fa = -1
    }
    Wa() {
        if (!(this.G || this.H || this.T())) {
            var f = this.O();
            f.paused || f.pause();
            this.i.Ea(f);
            this.G = !0
        }
    }
    Ab() {
        !this.G || this.H || this.T() || (this.i.va(this.O()), this.G = !1)
    }
    Kb() {
        this.O().muted = this.Ia || this.zb()
    }
    rc(f) {
        f = !!f;
        this.V !== f &&
            (this.V = f, this.O().loop = f)
    }
    Ga() {
        let f = this.qa;
        this.Wc && (f *= this.i.cc);
        try {
            this.O().playbackRate = f
        } catch (a) {
            console.warn(`[Construct 3] Unable to set playback rate '${f}':`, a)
        }
    }
    qc(f) {
        if (!this.H && !this.T()) try {
            this.O().currentTime = f
        } catch (a) {
            console.warn(`[Construct 3] Error seeking audio to '${f}': `, a)
        }
    }
    mc() {
        return this.Da()
    }
    sc(f) {
        f ? this.IsPlaying() ? (this.O().pause(), this.ka = !0) : this.ka = !1 : this.ka && (this.i.va(this
            .O()), this.ka = !1)
    }
};
"use strict";

function Z(f) {
    f.j && f.j.disconnect();
    f.j = null;
    f.$a = null
}
self.ve = class extends self.kd {
    constructor(f, a, b) {
        super(f, a, b);
        this.j = null;
        this.Wb = d => this.Cc(d);
        this.Rc = !0;
        this.$a = null;
        this.N = this.Xb = this.Yb = 0;
        this.$c = 1
    }
    c() {
        this.na();
        Z(this);
        this.Wb = null;
        super.c()
    }
    Cc(f) {
        this.G || this.ka || f.target !== this.$a || (this.H = this.Rc = !0, this.fa = -1, Z(this), this.i.pc(
            "ended", this.Y, this.Mb))
    }
    T() {
        return !this.H && this.j && this.j.loop || this.G ? !1 : this.Rc
    }
    fc() {
        return !this.j || this.H ? !0 : this.T()
    }
    Da() {
        let f;
        f = this.G ? this.N : this.Xb + (this.xb() - this.Yb) * this.qa;
        this.V || (f = Math.min(f, this.ea()));
        return f
    }
    Play(f, a, b, d) {
        this.$c = 1;
        this.Db(a);
        Z(this);
        this.j = this.W().createBufferSource();
        this.j.buffer = this.L.Z;
        this.j.connect(this.M);
        this.$a = this.j;
        this.j.onended = this.Wb;
        this.j.loop = f;
        this.j.start(d, b);
        this.G = this.H = this.Rc = !1;
        this.V = f;
        this.qa = 1;
        this.Yb = this.xb();
        this.Xb = b
    }
    na() {
        if (this.j) try {
            this.j.stop(0)
        } catch (f) { }
        this.H = !0;
        this.G = !1;
        this.fa = -1
    }
    Wa() {
        this.G || this.H || this.T() || (this.N = this.Da(), this.V && (this.N %= this.ea()), this.G = !0,
            this.j.stop(0))
    }
    Ab() {
        !this.G || this.H || this.T() || (Z(this), this.j =
            this.W().createBufferSource(), this.j.buffer = this.L.Z, this.j.connect(this.M), this.$a =
            this.j, this.j.onended = this.Wb, this.j.loop = this.V, this.Lb(), this.Ga(), this.j.start(0,
                this.N), this.Yb = this.xb(), this.Xb = this.N, this.G = !1)
    }
    lc() {
        return super.lc() * this.$c
    }
    Kb() {
        this.$c = this.Ia || this.zb() ? 0 : 1;
        this.Lb()
    }
    rc(f) {
        f = !!f;
        this.V !== f && (this.V = f, this.j && (this.j.loop = f))
    }
    Ga() {
        let f = this.qa;
        this.Wc && (f *= this.i.cc);
        this.j && (this.j.playbackRate.value = f)
    }
    qc(f) {
        this.H || this.T() || (this.G ? this.N = f : (this.Wa(), this.N = f, this.Ab()))
    }
    mc() {
        return this.N
    }
    sc(f) {
        f ?
            this.IsPlaying() ? (this.ka = !0, this.N = this.Da(), this.V && (this.N %= this.ea()), this.j
                .stop(0)) : this.ka = !1 : this.ka && (Z(this), this.j = this.W().createBufferSource(), this.j
                    .buffer = this.L.Z, this.j.connect(this.M), this.$a = this.j, this.j.onended = this.Wb, this.j
                        .loop = this.V, this.Lb(), this.Ga(), this.j.start(0, this.N), this.Yb = this.xb(), this.Xb =
                    this.N, this.ka = !1)
    }
    Ac(f) {
        super.Ac(f);
        this.N = f.resumePosition
    }
};
"use strict"; {
    class f {
        constructor(a) {
            this.i = a;
            this.f = a.W();
            this.Qd = -1;
            this.R = this.Y = "";
            this.g = null
        }
        c() {
            this.f = null
        }
        cg(a) {
            this.Qd = a
        }
        kg(a) {
            this.Y = a
        }
        o() {
            return this.f.createGain()
        }
        P() { }
        S() { }
        m(a, b, d, g) {
            a.cancelScheduledValues(0);
            if (0 === g) a.value = b;
            else {
                var n = this.f.currentTime;
                g += n;
                switch (d) {
                    case 0:
                        a.setValueAtTime(b, g);
                        break;
                    case 1:
                        a.setValueAtTime(a.value, n);
                        a.linearRampToValueAtTime(b, g);
                        break;
                    case 2:
                        a.setValueAtTime(a.value, n), a.exponentialRampToValueAtTime(b, g)
                }
            }
        }
        Ta() {
            return {
                type: this.R,
                tag: this.Y,
                params: this.g
            }
        }
    }
    self.me = class extends f {
        constructor(a, b, d, g, n, q, w) {
            super(a);
            this.R = "filter";
            this.g = [b, d, g, n, q, w];
            this.l = this.o();
            this.b = this.o();
            this.b.gain.value = w;
            this.a = this.o();
            this.a.gain.value = 1 - w;
            this.v = this.f.createBiquadFilter();
            this.v.type = b;
            this.v.frequency.value = d;
            this.v.detune.value = g;
            this.v.Q.value = n;
            this.v.gain.vlaue = q;
            this.l.connect(this.v);
            this.l.connect(this.a);
            this.v.connect(this.b)
        }
        c() {
            this.l.disconnect();
            this.v.disconnect();
            this.b.disconnect();
            this.a.disconnect();
            super.c()
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a, b, d, g) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0);
                    this.g[5] = b;
                    this.m(this.b.gain, b, d, g);
                    this.m(this.a.gain, 1 - b, d, g);
                    break;
                case 1:
                    this.g[1] = b;
                    this.m(this.v.frequency, b, d, g);
                    break;
                case 2:
                    this.g[2] = b;
                    this.m(this.v.detune, b, d, g);
                    break;
                case 3:
                    this.g[3] = b;
                    this.m(this.v.Q, b, d, g);
                    break;
                case 4:
                    this.g[4] = b, this.m(this.v.gain, b, d, g)
            }
        }
    };
    self.ke = class extends f {
        constructor(a, b, d, g) {
            super(a);
            this.R = "delay";
            this.g = [b, d, g];
            this.l =
                this.o();
            this.b = this.o();
            this.b.gain.value = g;
            this.a = this.o();
            this.a.gain.value = 1 - g;
            this.mb = this.o();
            this.U = this.f.createDelay(b);
            this.U.delayTime.value = b;
            this.cb = this.o();
            this.cb.gain.value = d;
            this.l.connect(this.mb);
            this.l.connect(this.a);
            this.mb.connect(this.b);
            this.mb.connect(this.U);
            this.U.connect(this.cb);
            this.cb.connect(this.mb)
        }
        c() {
            this.l.disconnect();
            this.b.disconnect();
            this.a.disconnect();
            this.mb.disconnect();
            this.U.disconnect();
            this.cb.disconnect();
            super.c()
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a, b, d, g) {
            const n = self.da.md;
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0);
                    this.g[2] = b;
                    this.m(this.b.gain, b, d, g);
                    this.m(this.a.gain, 1 - b, d, g);
                    break;
                case 4:
                    this.g[1] = n(b);
                    this.m(this.cb.gain, n(b), d, g);
                    break;
                case 5:
                    this.g[0] = b, this.m(this.U.delayTime, b, d, g)
            }
        }
    };
    self.je = class extends f {
        constructor(a, b, d, g) {
            super(a);
            this.R = "convolution";
            this.g = [d, g];
            this.Ld = this.Kd = "";
            this.l = this.o();
            this.b = this.o();
            this.b.gain.value = g;
            this.a = this.o();
            this.a.gain.value =
                1 - g;
            this.bb = this.f.createConvolver();
            this.bb.normalize = d;
            this.bb.buffer = b;
            this.l.connect(this.bb);
            this.l.connect(this.a);
            this.bb.connect(this.b)
        }
        c() {
            this.l.disconnect();
            this.bb.disconnect();
            this.b.disconnect();
            this.a.disconnect();
            super.c()
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a, b, d, g) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0), this.g[1] = b, this.m(this.b.gain, b, d, g), this
                        .m(this.a.gain, 1 - b, d, g)
            }
        }
        Zf(a, b) {
            this.Kd = a;
            this.Ld = b
        }
        Ta() {
            const a =
                super.Ta();
            a.bufferOriginalUrl = this.Kd;
            a.bufferUrl = "";
            a.bufferType = this.Ld;
            return a
        }
    };
    self.ne = class extends f {
        constructor(a, b, d, g, n, q) {
            super(a);
            this.R = "flanger";
            this.g = [b, d, g, n, q];
            this.l = this.o();
            this.a = this.o();
            this.a.gain.value = 1 - q / 2;
            this.b = this.o();
            this.b.gain.value = q / 2;
            this.fb = this.o();
            this.fb.gain.value = n;
            this.U = this.f.createDelay(b + d);
            this.U.delayTime.value = b;
            this.u = this.f.createOscillator();
            this.u.frequency.value = g;
            this.I = this.o();
            this.I.gain.value = d;
            this.l.connect(this.U);
            this.l.connect(this.a);
            this.U.connect(this.b);
            this.U.connect(this.fb);
            this.fb.connect(this.U);
            this.u.connect(this.I);
            this.I.connect(this.U.delayTime);
            this.u.start(0)
        }
        c() {
            this.u.stop(0);
            this.l.disconnect();
            this.U.disconnect();
            this.u.disconnect();
            this.I.disconnect();
            this.a.disconnect();
            this.b.disconnect();
            this.fb.disconnect();
            super.c()
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a, b, d, g) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0);
                    this.g[4] = b;
                    this.m(this.b.gain,
                        b / 2, d, g);
                    this.m(this.a.gain, 1 - b / 2, d, g);
                    break;
                case 6:
                    this.g[1] = b / 1E3;
                    this.m(this.I.gain, b / 1E3, d, g);
                    break;
                case 7:
                    this.g[2] = b;
                    this.m(this.u.frequency, b, d, g);
                    break;
                case 8:
                    this.g[3] = b / 100, this.m(this.fb.gain, b / 100, d, g)
            }
        }
    };
    self.pe = class extends f {
        constructor(a, b, d, g, n, q, w) {
            super(a);
            this.R = "phaser";
            this.g = [b, d, g, n, q, w];
            this.l = this.o();
            this.a = this.o();
            this.a.gain.value = 1 - w / 2;
            this.b = this.o();
            this.b.gain.value = w / 2;
            this.v = this.f.createBiquadFilter();
            this.v.type = "allpass";
            this.v.frequency.value = b;
            this.v.detune.value =
                d;
            this.v.Q.value = g;
            this.u = this.f.createOscillator();
            this.u.frequency.value = q;
            this.I = this.o();
            this.I.gain.value = n;
            this.l.connect(this.v);
            this.l.connect(this.a);
            this.v.connect(this.b);
            this.u.connect(this.I);
            this.I.connect(this.v.frequency);
            this.u.start(0)
        }
        c() {
            this.u.stop(0);
            this.l.disconnect();
            this.v.disconnect();
            this.u.disconnect();
            this.I.disconnect();
            this.a.disconnect();
            this.b.disconnect();
            super.c()
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a,
            b, d, g) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0);
                    this.g[5] = b;
                    this.m(this.b.gain, b / 2, d, g);
                    this.m(this.a.gain, 1 - b / 2, d, g);
                    break;
                case 1:
                    this.g[0] = b;
                    this.m(this.v.frequency, b, d, g);
                    break;
                case 2:
                    this.g[1] = b;
                    this.m(this.v.detune, b, d, g);
                    break;
                case 3:
                    this.g[2] = b;
                    this.m(this.v.Q, b, d, g);
                    break;
                case 6:
                    this.g[3] = b;
                    this.m(this.I.gain, b, d, g);
                    break;
                case 7:
                    this.g[4] = b, this.m(this.u.frequency, b, d, g)
            }
        }
    };
    self.oe = class extends f {
        constructor(a, b) {
            super(a);
            this.R = "gain";
            this.g = [b];
            this.h = this.o();
            this.h.gain.value =
                b
        }
        c() {
            this.h.disconnect();
            super.c()
        }
        S(a) {
            this.h.disconnect();
            this.h.connect(a)
        }
        P() {
            return this.h
        }
        X(a, b, d, g) {
            const n = self.da.md;
            switch (a) {
                case 4:
                    this.g[0] = n(b), this.m(this.h.gain, n(b), d, g)
            }
        }
    };
    self.re = class extends f {
        constructor(a, b, d) {
            super(a);
            this.R = "tremolo";
            this.g = [b, d];
            this.h = this.o();
            this.h.gain.value = 1 - d / 2;
            this.u = this.f.createOscillator();
            this.u.frequency.value = b;
            this.I = this.o();
            this.I.gain.value = d / 2;
            this.u.connect(this.I);
            this.I.connect(this.h.gain);
            this.u.start(0)
        }
        c() {
            this.u.stop(0);
            this.u.disconnect();
            this.I.disconnect();
            this.h.disconnect();
            super.c()
        }
        S(a) {
            this.h.disconnect();
            this.h.connect(a)
        }
        P() {
            return this.h
        }
        X(a, b, d, g) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0);
                    this.g[1] = b;
                    this.m(this.h.gain, 1 - b / 2, d, g);
                    this.m(this.I.gain, b / 2, d, g);
                    break;
                case 7:
                    this.g[0] = b, this.m(this.u.frequency, b, d, g)
            }
        }
    };
    self.qe = class extends f {
        constructor(a, b, d) {
            super(a);
            this.R = "ringmod";
            this.g = [b, d];
            this.l = this.o();
            this.b = this.o();
            this.b.gain.value = d;
            this.a = this.o();
            this.a.gain.value = 1 - d;
            this.sb = this.o();
            this.sb.gain.value =
                0;
            this.u = this.f.createOscillator();
            this.u.frequency.value = b;
            this.u.connect(this.sb.gain);
            this.u.start(0);
            this.l.connect(this.sb);
            this.l.connect(this.a);
            this.sb.connect(this.b)
        }
        c() {
            this.u.stop(0);
            this.u.disconnect();
            this.sb.disconnect();
            this.l.disconnect();
            this.b.disconnect();
            this.a.disconnect();
            super.c()
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a, b, d, g) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0);
                    this.g[1] = b;
                    this.m(this.b.gain, b, d, g);
                    this.m(this.a.gain, 1 - b, d, g);
                    break;
                case 7:
                    this.g[0] = b, this.m(this.u.frequency, b, d, g)
            }
        }
    };
    self.le = class extends f {
        constructor(a, b, d, g, n, q) {
            super(a);
            this.R = "distortion";
            this.g = [b, d, g, n, q];
            this.l = this.o();
            this.$b = this.o();
            this.Zb = this.o();
            this.$f(g, n);
            this.b = this.o();
            this.b.gain.value = q;
            this.a = this.o();
            this.a.gain.value = 1 - q;
            this.dc = this.f.createWaveShaper();
            this.Oc = new Float32Array(65536);
            this.gf(b, d);
            this.dc.curve = this.Oc;
            this.l.connect(this.$b);
            this.l.connect(this.a);
            this.$b.connect(this.dc);
            this.dc.connect(this.Zb);
            this.Zb.connect(this.b)
        }
        c() {
            this.l.disconnect();
            this.$b.disconnect();
            this.dc.disconnect();
            this.Zb.disconnect();
            this.b.disconnect();
            this.a.disconnect();
            super.c()
        }
        $f(a, b) {
            .01 > a && (a = .01);
            this.$b.gain.value = a;
            this.Zb.gain.value = Math.pow(1 / a, .6) * b
        }
        gf(a, b) {
            for (let d = 0; 32768 > d; ++d) {
                let g = d / 32768;
                g = this.mg(g, a, b);
                this.Oc[32768 + d] = g;
                this.Oc[32768 - d - 1] = -g
            }
        }
        mg(a, b, d) {
            d = 1.05 * d * b - b;
            const g = 0 > a ? -a : a;
            return (g < b ? g : b + d * self.da.Dg(g - b, 1 / d)) * (0 > a ? -1 : 1)
        }
        S(a) {
            this.b.disconnect();
            this.b.connect(a);
            this.a.disconnect();
            this.a.connect(a)
        }
        P() {
            return this.l
        }
        X(a, b, d, g) {
            switch (a) {
                case 0:
                    b = Math.max(Math.min(b / 100, 1), 0), this.g[4] = b, this.m(this.b.gain, b, d, g), this
                        .m(this.a.gain, 1 - b, d, g)
            }
        }
    };
    self.ie = class extends f {
        constructor(a, b, d, g, n, q) {
            super(a);
            this.R = "compressor";
            this.g = [b, d, g, n, q];
            this.h = this.f.createDynamicsCompressor();
            this.h.threshold.value = b;
            this.h.knee.value = d;
            this.h.ratio.value = g;
            this.h.attack.value = n;
            this.h.release.value = q
        }
        c() {
            this.h.disconnect();
            super.c()
        }
        S(a) {
            this.h.disconnect();
            this.h.connect(a)
        }
        P() {
            return this.h
        }
        X() { }
    };
    self.he = class extends f {
        constructor(a, b, d) {
            super(a);
            this.R = "analyser";
            this.g = [b, d];
            this.h = this.f.createAnalyser();
            this.h.fftSize = b;
            this.h.smoothingTimeConstant = d;
            this.Od = new Float32Array(this.h.frequencyBinCount);
            this.ae = new Uint8Array(b);
            this.Zd = this.La = 0;
            this.i.Re(this)
        }
        c() {
            this.i.Tf(this);
            this.h.disconnect();
            super.c()
        }
        ua() {
            this.h.getFloatFrequencyData(this.Od);
            this.h.getByteTimeDomainData(this.ae);
            const a = this.h.fftSize;
            let b = this.La = 0;
            for (var d = 0; d < a; ++d) {
                let g = (this.ae[d] - 128) / 128;
                0 > g && (g = -g);
                this.La < g && (this.La = g);
                b += g * g
            }
            d = self.da.He;
            this.La = d(this.La);
            this.Zd = d(Math.sqrt(b / a))
        }
        S(a) {
            this.h.disconnect();
            this.h.connect(a)
        }
        P() {
            return this.h
        }
        X() { }
        Be() {
            return {
                tag: this.Y,
                index: this.Qd,
                peak: this.La,
                rms: this.Zd,
                binCount: this.h.frequencyBinCount,
                freqBins: this.Od
            }
        }
    }
}
"use strict";

function ca(f) {
    window.C3_RegisterSW && window.OfflineClientInfo && window.OfflineClientInfo.SetMessageCallback(a => v(f,
        "sw-message", a.data))
}

function ea(f) {
    f = f.orientation;
    if (screen.orientation && screen.orientation.lock) screen.orientation.lock(f).catch(a => console.warn(
        "[Construct 3] Failed to lock orientation: ", a));
    else try {
        let a = !1;
        screen.lockOrientation ? a = screen.lockOrientation(f) : screen.webkitLockOrientation ? a = screen
            .webkitLockOrientation(f) : screen.mozLockOrientation ? a = screen.mozLockOrientation(f) : screen
                .msLockOrientation && (a = screen.msLockOrientation(f));
        a || console.warn("[Construct 3] Failed to lock orientation")
    } catch (a) {
        console.warn("[Construct 3] Failed to lock orientation: ",
            a)
    }
}
self.ma.Sa(class extends self.Ca {
    constructor(f) {
        super(f, "browser");
        this.s = "";
        K(this, [
            ["get-initial-state", a => {
                this.s = a.exportType;
                return {
                    location: location.toString(),
                    isOnline: !!navigator.onLine,
                    referrer: document.referrer,
                    title: document.title,
                    isCookieEnabled: !!navigator.cookieEnabled,
                    screenWidth: screen.width,
                    screenHeight: screen.height,
                    windowOuterWidth: window.outerWidth,
                    windowOuterHeight: window.outerHeight,
                    isScirraArcade: "undefined" !== typeof window.is_scirra_arcade
                }
            }],
            ["ready-for-sw-messages", () => ca(this)],
            ["alert", a => this.Bc(a)],
            ["close", () => {
                navigator.app && navigator.app.exitApp ? navigator.app.exitApp() : navigator
                    .device && navigator.device.exitApp ? navigator.device.exitApp() : window
                        .close()
            }],
            ["set-focus", a => this.Gc(a)],
            ["vibrate", a => {
                navigator.vibrate && navigator.vibrate(a.pattern)
            }],
            ["lock-orientation", a => ea(a)],
            ["unlock-orientation", () => {
                try {
                    screen.orientation && screen.orientation.unlock ? screen.orientation
                        .unlock() : screen.unlockOrientation ? screen.unlockOrientation() :
                        screen.webkitUnlockOrientation ? screen.webkitUnlockOrientation() :
                            screen.mozUnlockOrientation ? screen.mozUnlockOrientation() : screen
                                .msUnlockOrientation && screen.msUnlockOrientation()
                } catch (a) { }
            }],
            ["navigate", a => {
                var b = a.type;
                if ("back" === b) navigator.app && navigator.app.backHistory ? navigator.app
                    .backHistory() : window.history.back();
                else if ("forward" === b) window.history.forward();
                else if ("reload" === b) location.reload();
                else if ("url" === b) {
                    b = a.url;
                    const d = a.target;
                    a = a.exportType;
                    self.cordova && self.cordova.InAppBrowser ? self.cordova.InAppBrowser
                        .open(b, "_system") : "preview" ===
                            a || "windows-webview2" === a ? window.open(b, "_blank") : this.Sg ||
                    (2 === d ? window.top.location = b : 1 === d ? window.parent
                        .location = b : window.location = b)
                } else "new-window" === b && (b = a.url, a = a.tag, self.cordova && self
                    .cordova.InAppBrowser ? self.cordova.InAppBrowser.open(b, "_system") :
                    window.open(b, a))
            }],
            ["request-fullscreen", a => {
                if ("windows-webview2" === this.s || "macos-wkwebview" === this.s) self.ma.Jb(
                    !0), this.A.Kc({
                        type: "set-fullscreen",
                        fullscreen: !0
                    });
                else {
                    const b = {
                        navigationUI: "auto"
                    };
                    a = a.navUI;
                    1 === a ? b.navigationUI = "hide" :
                        2 === a && (b.navigationUI = "show");
                    a = document.documentElement;
                    a.requestFullscreen ? a.requestFullscreen(b) : a.mozRequestFullScreen ? a
                        .mozRequestFullScreen(b) : a.msRequestFullscreen ? a
                            .msRequestFullscreen(b) : a.webkitRequestFullScreen && (
                                "undefined" !== typeof Element.ALLOW_KEYBOARD_INPUT ? a
                                    .webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : a
                                        .webkitRequestFullScreen())
                }
            }],
            ["exit-fullscreen", () => {
                "windows-webview2" === this.s || "macos-wkwebview" === this.s ? (self.ma.Jb(!
                    1), this.A.Kc({
                        type: "set-fullscreen",
                        fullscreen: !1
                    })) :
                    document.exitFullscreen ? document.exitFullscreen() : document
                        .mozCancelFullScreen ? document.mozCancelFullScreen() : document
                            .msExitFullscreen ? document.msExitFullscreen() : document
                                .webkitCancelFullScreen && document.webkitCancelFullScreen()
            }],
            ["set-hash", a => {
                location.hash = a.hash
            }]
        ]);
        window.addEventListener("online", () => {
            v(this, "online-state", {
                isOnline: !0
            })
        });
        window.addEventListener("offline", () => {
            v(this, "online-state", {
                isOnline: !1
            })
        });
        window.addEventListener("hashchange", () => {
            v(this, "hashchange", {
                location: location.toString()
            })
        });
        document.addEventListener("backbutton", () => {
            v(this, "backbutton")
        })
    }
    Bc(f) {
        alert(f.message)
    }
    Gc(f) {
        f = f.isFocus;
        if ("nwjs" === this.s) {
            const a = "nwjs" === this.s ? nw.Window.get() : null;
            f ? a.focus() : a.blur()
        } else f ? window.focus() : window.blur()
    }
});